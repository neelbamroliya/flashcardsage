import { API_URL } from "./config";

export const createDeck = async (title: string) => {
  const responce = await fetch(`${API_URL}/decks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
    }),
  });
  return responce.json()
}