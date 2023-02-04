import { API_URL } from "./config";
import { DeckType } from './getDecks';


export const getDeck = async (deckId: string): Promise<DeckType> => {
  const response = await fetch(`${API_URL}/decks/${deckId}`);
  // console.log(await decks.json());
  return response.json();
  // console.log(decks);
}