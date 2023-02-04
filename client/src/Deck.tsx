import React, { useEffect, useState } from "react";
import "./deck.css";
import { useParams } from "react-router-dom";
import { DeckType } from "./api/getDecks";
import { createCard } from "./api/createCard";
import { getDeck } from "./api/getDeck";
import { deleteCard } from "./api/deleteCard";

export default function Deck() {
  const [deck, setDeck] = useState<DeckType | undefined>(undefined);
  const [cardText, setCardText] = useState("");
  const [cards, setCards] = useState<string[]>([]);

  let { deckId } = useParams();

  const handleCreateCard = async (e: React.FormEvent) => {
    e.preventDefault();
    const { cards: serverCards } = await createCard(deckId!, cardText);

    setCards(serverCards);
    setCardText("");
  };

  const handleDeleteCard = async (index: number) => {
    if (!deckId) return;
    const newDeck = await deleteCard(deckId, index);
    setCards(newDeck.cards);
    // setDecks(decks.filter((deck) => deck._id !== deckId));
  };

  useEffect(() => {
    const fetchDeck = async () => {
      if (!deckId) return;
      const newDecks = await getDeck(deckId!);
      setDeck(newDecks);
      setCards(newDecks.cards);
    };
    fetchDeck();
  }, [deckId]);

  return (
    <div className="Deck">
      <h1>{deck?.title}</h1>
      <ul className="cards">
        {cards.map((card, index) => (
          <li key={index}>
            {card}
            <button
              onClick={() => {
                handleDeleteCard(index);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreateCard}>
        <label htmlFor="deck-title">Deck Card</label>
        <input
          type="text"
          id="deck-title"
          value={cardText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setCardText(e.target.value);
          }}
        />
        <button>Create Card</button>
      </form>
    </div>
  );
}
