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
    title: 'maybe ill add smth else who knows',
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
  const [selectedDifficulties, setSelectedDifficulties] = useState(difficulties[0] ? [difficulties[0].id] : []);
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
    if (!selectedDifficulties.length) {
      setError('Select at least one difficulty.');
      return;
    }

    const { word, imposterWord, hint } = pickWord(selectedCategories, selectedDifficulties);
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

  const toggleDifficulty = (difficultyId) => {
    setSelectedDifficulties((prev) => {
      if (prev.includes(difficultyId)) {
        return prev.filter((id) => id !== difficultyId);
      }
      return [...prev, difficultyId];
    });
  };

  const silentImposterDisabled = imposterGetsHint;
  const hintDisabled = hiddenImposterMode;
  const activePlayer = round ? round.order[round.index] : null;
  const isLastPlayer = round ? round.index === round.order.length - 1 : false;
  const canRevealFinal = isLastPlayer && round?.revealed;

  return (
    <div className="page">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <div className="frame">
        {screen === 'home' && (
          <section className="panel panel-home">
            <div className="panel-head center">
              <div className="pick-hero">
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
                  <h3>{game.title}</h3>
                  {game.blurb && <p>{game.blurb}</p>}
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
                    className={`pill ${selectedDifficulties.includes(d.id) ? 'active' : ''}`}
                    type="button"
                    onClick={() => toggleDifficulty(d.id)}
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
              <button
                className="primary"
                type="button"
                onClick={startRound}
                disabled={!selectedCategories.length || !selectedDifficulties.length}
              >
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
                        ? `Your word is "${round.fakeWord}"`
                        : `You are the imposter. ${imposterGetsHint ? round.hint : 'Guess the word.'}`
                      : `Your word is "${round.word}"`}
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
                  </>
                )}
              </div>
            </div>

            {canRevealFinal && (
              <div className="final-action">
                <button className="imposter-button" type="button" onClick={revealFinal}>
                  Reveal imposter{round.imposters.length > 1 ? 's' : ''}
                </button>
              </div>
            )}

            {round.finalReveal && (
              <div className="complete">
                <h3 className="complete-title">Round reveal</h3>
                <div className="result-card">
                  <p className="result-label">Word</p>
                  <p className="result-value">{round.word}</p>
                </div>
                <div className="result-card">
                  <p className="result-label">Imposter{round.imposters.length > 1 ? 's' : ''}</p>
                  <p className="result-value">
                    {round.imposters.map((name, idx) => `${name}${idx < round.imposters.length - 1 ? ', ' : ''}`)}
                  </p>
                </div>
                <div className="actions results-actions">
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
          background: #f5f1ea;
        }
        .page {
          background: radial-gradient(circle at 24% 18%, #f1e8dd, #e0d4c7 38%, #f6f1e9 70%);
          color: #1f2428;
          display: flex;
          justify-content: center;
          padding: 12px 12px 28px;
          box-sizing: border-box;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          position: relative;
          overflow: hidden;
        }
        .orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(60px);
          opacity: 0.42;
          z-index: 0;
        }
        .orb-a {
          width: 340px;
          height: 340px;
          top: -120px;
          left: -80px;
          background: radial-gradient(circle, rgba(216, 193, 170, 0.7), rgba(216, 193, 170, 0.05));
        }
        .orb-b {
          width: 280px;
          height: 280px;
          top: 120px;
          right: -60px;
          background: radial-gradient(circle, rgba(179, 192, 204, 0.55), rgba(179, 192, 204, 0.08));
        }
        .orb-c {
          width: 260px;
          height: 260px;
          bottom: -120px;
          left: 20%;
          background: radial-gradient(circle, rgba(210, 206, 196, 0.6), rgba(210, 206, 196, 0.08));
        }
        .frame {
          width: 100%;
          max-width: 960px;
          display: grid;
          gap: 10px;
          position: relative;
          z-index: 1;
        }
        .panel-home .game-grid {
          margin-top: 2px;
        }
        .panel {
          background: rgba(255, 255, 253, 0.82);
          border: 1px solid #d9cfc2;
          border-radius: 12px;
          padding: 14px;
          box-shadow: 0 10px 26px rgba(35, 38, 40, 0.08), 0 1px 0 rgba(255, 255, 255, 0.55);
          display: grid;
          gap: 12px;
          backdrop-filter: blur(6px);
        }
        .panel-home {
          padding: 4px 10px 10px;
          gap: 8px;
        }
        .panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 4px 0 4px;
        }
        .panel-head.center {
          justify-content: center;
          text-align: center;
        }
        .panel-home .panel-head {
          padding: 2px 0 2px;
        }
        .pick-hero {
          width: 100%;
          background: linear-gradient(135deg, #e8dfd4, #d1c4b5);
          border: 1px solid #c4b6a6;
          border-radius: 16px;
          padding: 16px 22px;
          box-shadow: 0 12px 28px rgba(35, 38, 40, 0.12);
          margin: 0 0 6px;
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
          gap: 12px;
          margin-top: 4px;
        }
        .game-card {
          text-align: left;
          border-radius: 10px;
          padding: 12px 12px 14px;
          border: 1px solid #d5c9ba;
          background: #f8f4ed;
          cursor: pointer;
          transition: transform 0.1s ease, box-shadow 0.1s ease, border-color 0.1s ease;
        }
        .game-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(32, 35, 38, 0.12);
          border-color: #c3b6a7;
        }
        .game-card.disabled {
          cursor: not-allowed;
          opacity: 0.6;
          box-shadow: none;
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
          background: #e6ddd3;
          border-radius: 999px;
          padding: 6px 10px;
          font-weight: 600;
          color: #2c3135;
        }
        .chip.mini {
          padding: 4px 8px;
          font-size: 13px;
        }
        .chip.quiet {
          background: #f1ebe3;
          color: #51565c;
        }
        .chip-remove {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
          color: #2c3135;
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
          border: 1px solid #c3b6a7;
          font-size: 15px;
          background: #fefcf8;
        }
        .pill-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .pill {
          border-radius: 999px;
          border: 1px solid #c3b6a7;
          background: #f4ede3;
          padding: 8px 12px;
          cursor: pointer;
          color: #2c3135;
          font-weight: 600;
        }
        .pill.active {
          background: #7f8e98;
          color: #f8f7f5;
          border-color: #7f8e98;
          box-shadow: 0 10px 22px rgba(79, 94, 105, 0.22);
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
          color: #2c3135;
          background: #e5dcd0;
        }
        button.primary {
          background: linear-gradient(135deg, #6f7f8a, #98a3a7);
          color: #f9f8f6;
          box-shadow: 0 14px 34px rgba(63, 81, 92, 0.28);
        }
        button.ghost {
          background: transparent;
          border: 1px solid #c3b6a7;
          color: #2c3135;
        }
        button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          box-shadow: none;
        }
        .error {
          padding: 12px;
          background: #f9e8e4;
          border: 1px solid #e9c9c0;
          color: #a34940;
          border-radius: 10px;
        }
        .card {
          border: 1px solid #d9cfc2;
          border-radius: 10px;
          padding: 12px;
          background: #fbf7f1;
        }
        .player {
          margin: 2px 0;
          font-size: 22px;
        }
        .reveal-box {
          background: #283037;
          color: #f7f4ed;
          border-radius: 10px;
          padding: 12px;
          margin-top: 8px;
          margin-bottom: 12px;
          min-height: 64px;
          display: flex;
          align-items: center;
        }
        .imposter-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #9b694e, #c58b63);
          color: #fdf8f2;
          border: none;
          border-radius: 12px;
          padding: 15px 18px;
          font-size: 15px;
          font-weight: 800;
          box-shadow: 0 16px 36px rgba(141, 104, 79, 0.28);
          width: 100%;
        }
        .final-action {
          margin-top: 18px;
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
          border: 1px solid #c3b6a7;
          background: #f4ede3;
          font-weight: 600;
          color: #2c3135;
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
          color: #7a7f85;
          margin: 0;
        }
        .complete {
          border: 1px dashed #c3b6a7;
          border-radius: 10px;
          padding: 12px;
          background: #f3eee6;
          display: grid;
          gap: 10px;
        }
        .complete-title {
          margin: 0;
          font-size: 18px;
          letter-spacing: 0.01em;
        }
        .result-card {
          background: #fbf7f1;
          border: 1px solid #d9cfc2;
          border-radius: 10px;
          padding: 12px;
        }
        .result-label {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 12px;
          color: #6a625a;
        }
        .result-value {
          margin: 4px 0 0;
          font-size: 22px;
          font-weight: 800;
          color: #2c3135;
        }
        .results-actions {
          margin-top: 16px;
        }
        @media (max-width: 640px) {
          .panel-head {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
