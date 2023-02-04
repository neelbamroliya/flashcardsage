import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  type DeckType = {
    _id: string;
    title: string;
  };
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<DeckType[]>([]);

  const handleCreateDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:5000/decks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
      }),
    });
    setTitle("");
  };

  useEffect(() => {
    const fetchDecks = async () => {
      const response = await fetch("http://localhost:5000/decks");
      // console.log(await decks.json());
      const decks = await response.json();
      // console.log(decks);
      setDecks(decks);
    };
    fetchDecks();
  }, []);

  return (
    <div className="App">
      <ul className="decks">
        {decks.map((deck) => (
          <li key={deck._id}>{deck.title}</li>
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
