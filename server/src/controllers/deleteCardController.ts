import { Request, Response } from "express"
import Deck from "../models/deck"

export const deleteCardController = async (req: Request, res: Response) => {
  const { deckId, index } = req.params

  const deck = await Deck.findById(deckId)
  if (!deck) return res.status(400).send("No deck found")
  deck.cards.splice(parseInt(index), 1)
  await deck.save()
  res.json(deck)
}