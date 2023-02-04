import { Request, Response } from "express"
import Deck from "../models/deck"

export const deleteDeckController = async (req: Request, res: Response) => {
  const deckId = req.params.deckId

  const deletedDeck = await Deck.findByIdAndDelete(deckId)
  res.json({
    message: "successfully deleted the entry..!!"
  })
}