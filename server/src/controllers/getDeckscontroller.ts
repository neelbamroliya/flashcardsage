import { Request, Response } from "express"
import Deck from "../models/deck"

export const getDecksController = async (req: Request, res: Response) => {
  const decks = await Deck.find()
  // console.log(decks)
  res.json(decks)
}
