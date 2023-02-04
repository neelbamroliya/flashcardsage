import { Request, Response } from "express"
import Deck from "../models/deck"

export const createDeckController = async (req: Request, res: Response) => {
  console.log(req.body);
  const { title } = req.body

  const newDeck = new Deck({
    title: title
  })
  const createdDeck = await newDeck.save()
  res.json(createdDeck)
}