'use client';

import { useMemo, useState } from 'react';
import { listCategories, listDifficulties, pickWord } from './wordDatabase';

const games = [
  {
    id: 'imposter',
    title: 'Word Imposter',
    blurb: 'One secret word, one hidden imposter trying to guess it.',
    status: 'ready',
  },
  {
    id: 'coming-soon',
    title: 'Mystery Mode',
    blurb: 'Reserved for your next party game.',
    status: 'soon',
  },
];

function buildHint(word) {
  if (!word) return '';
  const first = word[0]?.toUpperCase();
  const len = word.length;
  return `Hint: starts with "${first}" and has ${len} letters.`;
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function Page() {
  const categories = useMemo(() => listCategories(), []);
  const difficulties = useMemo(() => listDifficulties(), []);
  const [screen, setScreen] = useState('home');
  const [selectedGame, setSelectedGame] = useState(null);
  const [players, setPlayers] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [difficulty, setDifficulty] = useState(difficulties[0]?.id || '');
  const [round, setRound] = useState(null);
  const [error, setError] = useState('');
  const [allowMultipleImposters, setAllowMultipleImposters] = useState(false);
  const [imposterCount, setImposterCount] = useState(1);
  const [hiddenImposterMode, setHiddenImposterMode] = useState(false);
  const [imposterGetsHint, setImposterGetsHint] = useState(false);

  const startSetup = (gameId) => {
    setSelectedGame(gameId);
    setScreen('setup');
    setError('');
  };

  const addPlayer = () => {
    const trimmed = nameInput.trim();
    if (!trimmed) return;
    if (players.includes(trimmed)) {
      setError('That name is already in the list.');
      return;
    }
    setPlayers((prev) => [...prev, trimmed]);
    setNameInput('');
    setError('');
  };

  const removePlayer = (name) => {
    setPlayers((prev) => prev.filter((p) => p !== name));
    setError('');
  };

  const startRound = () => {
    const cleanedPlayers = players.map((p) => p.trim()).filter(Boolean);
    if (cleanedPlayers.length < 3) {
      setError('Add at least 3 names to start a round.');
      return;
    }
    if (!selectedCategories.length) {
      setError('Select at least one category.');
      return;
    }

    const { word, imposterWord, hint } = pickWord(selectedCategories, difficulty);
    const hintText = hint || buildHint(word);
    const order = shuffle(cleanedPlayers);
    const maxImposters = Math.max(1, order.length - 1);
    const requestedCount = allowMultipleImposters ? Math.max(1, imposterCount || 1) : 1;
    if (requestedCount > maxImposters) {
      setError(`Imposters cannot exceed players minus one. Max allowed: ${maxImposters}.`);
      return;
    }
    const imposterList = order.slice(0, Math.max(1, Math.min(requestedCount, maxImposters)));

    setRound({
      word,
      fakeWord: imposterWord,
      imposters: imposterList,
      order,
      index: 0,
      revealed: false,
      concealed: false,
      finalReveal: false,
      hint: hintText,
    });
    setScreen('round');
    setError('');
  };

  const revealRole = () => {
    setRound((prev) => (prev ? { ...prev, revealed: true, concealed: false } : prev));
  };

  const nextPlayer = () => {
    setRound((prev) => {
      if (!prev) return prev;
      const nextIndex = Math.min(prev.index + 1, prev.order.length - 1);
      return { ...prev, index: nextIndex, revealed: false, concealed: false };
    });
  };

  const revealFinal = () => {
    setRound((prev) => (prev ? { ...prev, finalReveal: true } : prev));
  };

  const toggleHide = () => {
    setRound((prev) => (prev ? { ...prev, concealed: !prev.concealed } : prev));
  };

  const resetRound = () => {
    setRound(null);
    setScreen('setup');
    setError('');
  };

  const goHome = () => {
    setRound(null);
    setSelectedGame(null);
    setScreen('home');
    setError('');
  };

  const reshuffleSameGroup = () => {
    startRound();
  };

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      }
      return [...prev, categoryId];
    });
  };

  const silentImposterDisabled = imposterGetsHint;
  const hintDisabled = hiddenImposterMode;
  const activePlayer = round ? round.order[round.index] : null;
  const isLastPlayer = round ? round.index === round.order.length - 1 : false;

  return (
    <div className="page">
      <div className="frame">
        <header className="hero">
          <h1>Social Games</h1>
        </header>

        {screen === 'home' && (
          <section className="panel">
            <div className="panel-head center">
              <div>
                <p className="label">Pick a game</p>
                <h2>Pick a game</h2>
              </div>
            </div>
            <div className="game-grid">
              {games.map((game) => (
                <button
                  key={game.id}
                  className={`game-card ${game.status !== 'ready' ? 'disabled' : ''}`}
                  onClick={() => game.status === 'ready' && startSetup(game.id)}
                  type="button"
                >
                  <div className="status">{game.status === 'ready' ? 'Ready' : 'Coming soon'}</div>
                  <h3>{game.title}</h3>
                  <p>{game.blurb}</p>
                </button>
              ))}
            </div>
          </section>
        )}

        {screen === 'setup' && (
          <section className="panel">
            <div className="panel-head">
              <div>
                <p className="label">Setup</p>
                <h2>Who is playing?</h2>
              </div>
              <button className="ghost" type="button" onClick={goHome}>
                Exit
              </button>
            </div>

            <div className="section">
              <div className="section-head">
                <h4>Players</h4>
                <p className="hint">Add at least three names.</p>
              </div>
              <div className="chips">
                {players.map((name) => (
                  <span key={name} className="chip">
                    {name}
                    <button className="chip-remove" type="button" onClick={() => removePlayer(name)}>
                      ×
                    </button>
                  </span>
                ))}
                {players.length === 0 && <p className="empty">No players yet.</p>}
              </div>
              <div className="inline-form">
                <input
                  type="text"
                  placeholder="Add a player name"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                />
                <button type="button" onClick={addPlayer}>
                  Add
                </button>
              </div>
            </div>

            <div className="section">
              <div className="section-head">
                <h4>Categories</h4>
                <p className="hint">Select one or more; each round uses a random pick.</p>
              </div>
              <div className="pill-row">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`pill ${selectedCategories.includes(cat.id) ? 'active' : ''}`}
                    type="button"
                    onClick={() => toggleCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="section">
              <div className="section-head">
                <h4>Difficulty</h4>
              </div>
              <div className="pill-row">
                {difficulties.map((d) => (
                  <button
                    key={d.id}
                    className={`pill ${difficulty === d.id ? 'active' : ''}`}
                    type="button"
                    onClick={() => setDifficulty(d.id)}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="section grid-two">
              <div>
                <div className="section-head">
                  <h4>Imposters</h4>
                </div>
                <div className="pill-row">
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={allowMultipleImposters}
                      onChange={(e) => setAllowMultipleImposters(e.target.checked)}
                    />
                    <span>Allow Multiple Imposters</span>
                  </label>
                  <label className={`toggle column ${silentImposterDisabled ? 'disabled' : ''}`}>
                    <div className="row">
                      <input
                        type="checkbox"
                        checked={hiddenImposterMode}
                        onChange={(e) => {
                          const next = e.target.checked;
                          setHiddenImposterMode(next);
                          if (next) setImposterGetsHint(false);
                        }}
                        disabled={silentImposterDisabled}
                      />
                      <span>Silent Imposters</span>
                    </div>
                    <p className="hint small">Imposters see a similar word and don&apos;t know they are imposters.</p>
                  </label>
                  <label className={`toggle ${hintDisabled ? 'disabled' : ''}`}>
                    <input
                      type="checkbox"
                      checked={imposterGetsHint}
                      onChange={(e) => {
                        const next = e.target.checked;
                        setImposterGetsHint(next);
                        if (next) setHiddenImposterMode(false);
                      }}
                      disabled={hintDisabled}
                    />
                    <span>Give Imposters a Hint</span>
                  </label>
                </div>
                {allowMultipleImposters && (
                  <div className="inline-form">
                    <label className="hint" htmlFor="imposterCount">
                      Number of Imposters
                    </label>
                    <input
                      id="imposterCount"
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={imposterCount}
                      onChange={(e) => {
                        const numeric = parseInt(e.target.value, 10);
                        setImposterCount(Number.isNaN(numeric) ? '' : numeric);
                      }}
                      style={{ maxWidth: '140px' }}
                      placeholder="1"
                    />
                  </div>
                )}
              </div>
            </div>

            {error && <div className="error">{error}</div>}

            <div className="actions">
              <button className="primary" type="button" onClick={startRound} disabled={!selectedCategories.length}>
                Start game
              </button>
              <button className="ghost" type="button" onClick={() => setPlayers([])}>
                Clear names
              </button>
            </div>
          </section>
        )}

        {screen === 'round' && round && (
          <section className="panel">
            <div className="panel-head">
              <div>
                <h2>Pass the phone</h2>
              </div>
              <button className="ghost" type="button" onClick={resetRound}>
                Back to settings
              </button>
            </div>

            <div className="card">
              <p className="label">Current player</p>
              <h3 className="player">{activePlayer}</h3>
              <p className="hint">
                {round.order.length - (round.index + (round.revealed ? 1 : 0))} left after this.
              </p>
              <div className="reveal-box">
                {!round.revealed && <p>Tap reveal to see your role.</p>}
                {round.revealed && !round.concealed && (
                  <p className="reveal">
                    {round.imposters.includes(activePlayer)
                      ? hiddenImposterMode
                        ? `Secret word: ${round.fakeWord}`
                        : `You are the imposter. ${imposterGetsHint ? round.hint : 'Guess the word.'}`
                      : `Secret word: ${round.word}`}
                  </p>
                )}
                {round.revealed && round.concealed && <p className="reveal">Hidden. Tap reveal again.</p>}
              </div>
              <div className="actions">
                {!round.revealed ? (
                  <button className="primary" type="button" onClick={revealRole}>
                    Reveal my role
                  </button>
                ) : (
                  <>
                    <button className="ghost" type="button" onClick={toggleHide}>
                      {round.concealed ? 'Show again' : 'Hide'}
                    </button>
                    {!isLastPlayer && (
                      <button className="primary" type="button" onClick={nextPlayer}>
                        Next player
                      </button>
                    )}
                    {isLastPlayer && (
                      <button className="primary" type="button" onClick={revealFinal}>
                        Reveal imposter{round.imposters.length > 1 ? 's' : ''}
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>

            {round.finalReveal && (
              <div className="complete">
                <h3>Reveal</h3>
                <p className="hint">
                  Word: <strong>{round.word}</strong>
                </p>
                <p className="hint">
                  Imposter{round.imposters.length > 1 ? 's' : ''}:{' '}
                  <strong>{round.imposters.join(', ')}</strong>
                </p>
                <div className="actions">
                  <button className="primary" type="button" onClick={reshuffleSameGroup}>
                    New word, same names
                  </button>
                  <button className="ghost" type="button" onClick={resetRound}>
                    Adjust settings
                  </button>
                  <button className="ghost" type="button" onClick={goHome}>
                    Exit to start
                  </button>
                </div>
              </div>
            )}
          </section>
        )}
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #f8fafc;
        }
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at 20% 20%, #f1f5f9, #e2e8f0 40%, #f8fafc 70%);
          color: #0f172a;
          display: flex;
          justify-content: center;
          padding: 20px 12px 32px;
          box-sizing: border-box;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }
        .frame {
          width: 100%;
          max-width: 960px;
          display: grid;
          gap: 12px;
        }
        .hero {
          background: #0f172a;
          color: #f8fafc;
          padding: 10px 14px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.15);
          min-height: 56px;
        }
        .hero h1 {
          margin: 0;
          font-size: 18px;
          letter-spacing: 0.02em;
          font-weight: 700;
        }
        .panel {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.05);
          display: grid;
          gap: 14px;
        }
        .panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 4px 0 6px;
        }
        .panel-head.center {
          justify-content: center;
          text-align: center;
        }
        h2 {
          margin: 2px 0;
        }
        .label {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 11px;
          color: #475569;
          margin: 0;
        }
        .lede {
          margin: 0;
          max-width: 720px;
          color: #e2f3ff;
        }
        .hint {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }
        .game-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 10px;
        }
        .game-card {
          text-align: left;
          border-radius: 10px;
          padding: 14px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          cursor: pointer;
          transition: transform 0.1s ease, box-shadow 0.1s ease, border-color 0.1s ease;
        }
        .game-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
          border-color: #cbd5e1;
        }
        .game-card.disabled {
          cursor: not-allowed;
          opacity: 0.55;
        }
        .status {
          font-size: 12px;
          color: #0ea5e9;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        h3 {
          margin: 4px 0 6px;
        }
        .section {
          display: grid;
          gap: 6px;
        }
        .section-head {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }
        .chips {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .chips.small {
          min-height: 32px;
        }
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #e2e8f0;
          border-radius: 999px;
          padding: 6px 10px;
          font-weight: 600;
          color: #0f172a;
        }
        .chip.mini {
          padding: 4px 8px;
          font-size: 13px;
        }
        .chip.quiet {
          background: #f1f5f9;
          color: #475569;
        }
        .chip-remove {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
          color: #0f172a;
        }
        .inline-form {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        input[type='text'] {
          flex: 1;
          min-width: 200px;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          font-size: 15px;
        }
        .pill-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .pill {
          border-radius: 999px;
          border: 1px solid #cbd5e1;
          background: #f8fafc;
          padding: 8px 12px;
          cursor: pointer;
          color: #0f172a;
          font-weight: 600;
        }
        .pill.active {
          background: #0ea5e9;
          color: #f8fafc;
          border-color: #0ea5e9;
          box-shadow: 0 10px 22px rgba(14, 165, 233, 0.25);
        }
        .actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        button {
          border: none;
          cursor: pointer;
          border-radius: 10px;
          padding: 10px 12px;
          font-weight: 700;
          font-size: 14px;
          color: #0f172a;
          background: #e2e8f0;
        }
        button.primary {
          background: linear-gradient(135deg, #0ea5e9, #22c55e);
          color: #f8fafc;
          box-shadow: 0 14px 34px rgba(34, 197, 94, 0.35);
        }
        button.ghost {
          background: transparent;
          border: 1px solid #cbd5e1;
          color: #0f172a;
        }
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          box-shadow: none;
        }
        .error {
          padding: 12px;
          background: #fef2f2;
          border: 1px solid #fecdd3;
          color: #b91c1c;
          border-radius: 10px;
        }
        .card {
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 12px;
          background: #f8fafc;
        }
        .player {
          margin: 2px 0;
          font-size: 22px;
        }
        .reveal-box {
          background: #0f172a;
          color: #f8fafc;
          border-radius: 10px;
          padding: 12px;
          margin-top: 8px;
          min-height: 64px;
          display: flex;
          align-items: center;
        }
        .reveal {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
        }
        .toggle {
          display: inline-flex;
          align-items: flex-start;
          gap: 6px;
          padding: 8px 10px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          background: #f8fafc;
          font-weight: 600;
          color: #0f172a;
        }
        .toggle.column {
          flex-direction: column;
          align-items: flex-start;
        }
        .toggle .row {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .toggle input {
          width: 16px;
          height: 16px;
        }
        .toggle.disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }
        .toggle.disabled input {
          cursor: not-allowed;
        }
        .hint.small {
          font-size: 12px;
          margin: 2px 0 0;
        }
        .grid-two {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 12px;
          align-items: start;
        }
        .empty {
          color: #94a3b8;
          margin: 0;
        }
        .complete {
          border: 1px dashed #cbd5e1;
          border-radius: 10px;
          padding: 12px;
          background: #f1f5f9;
        }
        @media (max-width: 640px) {
          .hero {
            flex-direction: column;
            align-items: flex-start;
          }
          .panel-head {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
