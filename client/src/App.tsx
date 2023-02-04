import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { createDeck } from "./api/createDeck";
import { deleteDeck } from "./api/deleteDecks";
import { DeckType, getDecks } from "./api/getDecks";

function App() {
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<DeckType[]>([]);

  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    const deck = await createDeck(title);

    setDecks([...decks, deck]);
    setTitle("");
  };

  const handleDeleteDeck = async (deckId: string) => {
    deleteDeck(deckId);
    setDecks(decks.filter((deck) => deck._id !== deckId));
  };

  useEffect(() => {
    const fetchDecks = async () => {
      const decks = await getDecks();
      setDecks(decks);
    };
    fetchDecks();
  }, []);

  return (
    <div className="App">
      <ul className="decks">
        {decks.map((deck) => (
          <li key={deck._id}>
            <button
              onClick={() => {
                handleDeleteDeck(deck._id);
              }}
            >
              X
            </button>
            <Link to={`decks/${deck._id}`}>{deck.title}</Link>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          type="text"
          id="deck-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button>Create Deck</button>
      </form>
    </div>
  );
}

export default App;
