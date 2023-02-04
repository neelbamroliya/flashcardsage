import { Request, Response } from "express"
import Deck from "../models/deck"

export const getDeckController = async (req: Request, res: Response) => {
  const { deckId } = req.params
  const deck = await Deck.findById(deckId)
  // console.log(decks)
  res.json(deck)
}
