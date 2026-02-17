'use client';

import { useState } from 'react';
import { pickCard } from './cards';

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function ClashRoyaleGame() {
  const [players, setPlayers] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [round, setRound] = useState(null);
  const [error, setError] = useState('');
  const [includeHeroes, setIncludeHeroes] = useState(false);
  const [includeEvos, setIncludeEvos] = useState(false);

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

    const card = pickCard({ includeHeroes, includeEvos });
    if (!card) {
      setError('No Clash Royale cards are configured yet.');
      return;
    }

    const order = shuffle(cleanedPlayers);
    const imposter = order[Math.floor(Math.random() * order.length)];

    setRound({
      card,
      imposter,
      order,
      index: 0,
      revealed: false,
      concealed: false,
      finalReveal: false,
    });
    setError('');
  };

  const revealRole = () => {
    setRound((prev) => (prev ? { ...prev, revealed: true, concealed: false } : prev));
  };

  const previousPlayer = () => {
    setRound((prev) => {
      if (!prev) return prev;
      const prevIndex = Math.max(0, prev.index - 1);
      if (prevIndex === prev.index) return prev;
      return { ...prev, index: prevIndex, revealed: true, concealed: true };
    });
  };

  const nextPlayer = () => {
    setRound((prev) => {
      if (!prev) return prev;
      const nextIndex = Math.min(prev.index + 1, prev.order.length - 1);
      return { ...prev, index: nextIndex, revealed: true, concealed: true };
    });
  };

  const toggleHide = () => {
    setRound((prev) => (prev ? { ...prev, concealed: !prev.concealed } : prev));
  };

  const resetRound = () => {
    setRound(null);
    setError('');
  };

  const revealFinal = () => {
    setRound((prev) => (prev ? { ...prev, finalReveal: true } : prev));
  };

  const activePlayer = round ? round.order[round.index] : null;
  const isLastPlayer = round ? round.index === round.order.length - 1 : false;
  const canRevealFinal = isLastPlayer && round?.revealed;
  const isImposter = round ? round.imposter === activePlayer : false;

  return (
    <div className="page">
      <div className="frame">
        {!round && (
          <section className="panel">
            <div className="panel-head">
              <div>
                <p className="label">Clash Royale Guessing</p>
                <h2>Who is playing?</h2>
              </div>
              <a className="ghost-link" href="/games/imposter">
                Back
              </a>
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
                      x
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
                <h4>Card Options</h4>
              </div>
              <div className="actions">
                <label className="toggle">
                  <input
                    type="checkbox"
                    checked={includeHeroes}
                    onChange={(e) => setIncludeHeroes(e.target.checked)}
                  />
                  <span>Include Hero Cards</span>
                </label>
                <label className="toggle">
                  <input type="checkbox" checked={includeEvos} onChange={(e) => setIncludeEvos(e.target.checked)} />
                  <span>Include Evo Cards</span>
                </label>
              </div>
            </div>

            {error && <div className="error">{error}</div>}

            <div className="actions">
              <button className="primary" type="button" onClick={startRound}>
                Start game
              </button>
              <button className="ghost" type="button" onClick={() => setPlayers([])}>
                Clear names
              </button>
            </div>
          </section>
        )}

        {round && (
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
                  <div className="reveal-content">
                    {isImposter ? (
                      <p className="reveal">You are the imposter.</p>
                    ) : (
                      <>
                        <p className="reveal">Card: {round.card.name}</p>
                        <img className="card-image" src={round.card.image} alt={round.card.name} />
                      </>
                    )}
                  </div>
                )}
                {round.revealed && round.concealed && <p className="reveal">Hidden. Tap reveal again.</p>}
              </div>
              <div className="actions">
                {round.index > 0 && (
                  <button className="primary" type="button" onClick={previousPlayer}>
                    Previous player
                  </button>
                )}
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
                  Reveal imposter
                </button>
              </div>
            )}

            {round.finalReveal && (
              <div className="complete">
                <h3 className="complete-title">Round reveal</h3>
                <div className="result-card">
                  <p className="result-label">Card</p>
                  <p className="result-value">{round.card.name}</p>
                  <img className="card-image final-card-image" src={round.card.image} alt={round.card.name} />
                </div>
                <div className="result-card">
                  <p className="result-label">Imposter</p>
                  <p className="result-value">{round.imposter}</p>
                </div>
                <div className="actions results-actions">
                  <button className="primary" type="button" onClick={startRound}>
                    New card, same names
                  </button>
                  <button className="ghost" type="button" onClick={resetRound}>
                    Adjust settings
                  </button>
                  <a className="ghost-link" href="/games/imposter">
                    Exit to start
                  </a>
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
          min-height: 100vh;
          background: radial-gradient(circle at 24% 18%, #f1e8dd, #e0d4c7 38%, #f6f1e9 70%);
          color: #1f2428;
          display: flex;
          justify-content: center;
          padding: 12px 12px 28px;
          box-sizing: border-box;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }
        .frame {
          width: 100%;
          max-width: 960px;
        }
        .panel {
          background: rgba(255, 255, 253, 0.9);
          border: 1px solid #d9cfc2;
          border-radius: 12px;
          padding: 14px;
          display: grid;
          gap: 12px;
        }
        .panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .label {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 11px;
          color: #475569;
          margin: 0;
        }
        h2,
        h3,
        h4,
        p {
          margin: 0;
        }
        .hint {
          color: #64748b;
          font-size: 14px;
        }
        .section {
          display: grid;
          gap: 8px;
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
        .chip-remove {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
          color: #2c3135;
        }
        .empty {
          color: #7a7f85;
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
        .actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .toggle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: 10px;
          border: 1px solid #c3b6a7;
          background: #f4ede3;
          font-weight: 600;
          color: #2c3135;
        }
        .toggle input {
          width: 16px;
          height: 16px;
        }
        button,
        .ghost-link {
          border: none;
          cursor: pointer;
          border-radius: 10px;
          padding: 10px 12px;
          font-weight: 700;
          font-size: 14px;
          color: #2c3135;
          background: #e5dcd0;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        button.primary {
          background: linear-gradient(135deg, #6f7f8a, #98a3a7);
          color: #f9f8f6;
        }
        button.ghost,
        .ghost-link {
          background: transparent;
          border: 1px solid #c3b6a7;
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
          display: grid;
          gap: 10px;
        }
        .player {
          font-size: 22px;
        }
        .reveal-box {
          background: #283037;
          color: #f7f4ed;
          border-radius: 10px;
          padding: 12px;
          min-height: 96px;
        }
        .reveal-content {
          display: grid;
          gap: 10px;
        }
        .reveal {
          font-size: 16px;
          font-weight: 700;
        }
        .card-image {
          width: 170px;
          max-width: 100%;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.08);
        }
        .final-card-image {
          margin-top: 10px;
          border-color: #d9cfc2;
          background: #fff;
        }
        .imposter-button {
          width: 100%;
          background: linear-gradient(135deg, #9b694e, #c58b63);
          color: #fdf8f2;
        }
        .complete {
          border: 1px dashed #c3b6a7;
          border-radius: 10px;
          padding: 12px;
          background: #f3eee6;
          display: grid;
          gap: 10px;
        }
        .result-card {
          background: #fbf7f1;
          border: 1px solid #d9cfc2;
          border-radius: 10px;
          padding: 12px;
        }
        .result-label {
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 12px;
          color: #6a625a;
        }
        .result-value {
          margin-top: 4px;
          font-size: 22px;
          font-weight: 800;
          color: #2c3135;
        }
      `}</style>
    </div>
  );
}
