import express, { Request, Response } from "express"
import mongoose from "mongoose"
import { config } from "dotenv"
import cors from "cors"

import Deck from "./models/deck"

config()
const app = express()
app.use(express.json())
app.use(cors())

app.get("/decks", async (req: Request, res: Response) => {
  const decks = await Deck.find()
  // console.log(decks)
  res.json(decks)
})

app.post("/decks", async (req: Request, res: Response) => {
  console.log(req.body);
  const { title } = req.body

  const newDeck = new Deck({
    title: title
  })
  const createdDeck = await newDeck.save()
  res.json(createdDeck)
})

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL!)
  .then(() => {
    console.log("database connected successfully")
    app.listen(process.env.PORT)
  })
  .catch((err) => console.log(`error : ${err.massage}`))
