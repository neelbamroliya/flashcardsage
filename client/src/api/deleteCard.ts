import { API_URL } from "./config";
import { DeckType } from "./getDecks";

export const deleteCard = async (deckId: string, index: number): Promise<DeckType> => {
  const response = await fetch(`${API_URL}/decks/${deckId}/cards/${index}`, {
    method: "DELETE",
  })

  return response.json()
}