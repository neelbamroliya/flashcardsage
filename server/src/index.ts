import express, { Request, Response } from "express"
import mongoose from "mongoose"
import { config } from "dotenv"

import Deck from "./models/deck"

config()
const app = express()
app.use(express.json())

app.post("/decks", async (req: Request, res: Response) => {
  console.log(req.body);
  const { title } = req.body

  const newDeck = new Deck({
    title
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
