import { API_URL } from "./config";
import { DeckType } from "./getDecks";

export const createCard = async (deckId: string, cardText: string): Promise<DeckType> => {
  const responce = await fetch(`${API_URL}/decks/${deckId}/cards`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cardText,
    }),
  });
  return responce.json()
}