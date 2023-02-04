import { API_URL } from "./config";

export type DeckType = {
  _id: string;
  cards: [];
  title: string;
};

export const getDecks = async (): Promise<DeckType[]> => {
  const response = await fetch(`${API_URL}/decks`);
  // console.log(await decks.json());
  return response.json();
  // console.log(decks);
}