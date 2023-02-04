import { API_URL } from "./config";
import { DeckType } from "./getDecks";

export const getCards = async (deckId: string): Promise<DeckType[]> => {
  const response = await fetch(`${API_URL}/decks/${deckId}/cards`);
  // console.log(await decks.json());
  return response.json();
  // console.log(decks);
}