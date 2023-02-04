import express, { Request, Response } from "express"
import mongoose from "mongoose"

import Deck from "./models/deck"

const app = express()
app.use(express.json())
const PORT = 5000


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
mongoose.connect("mongodb+srv://owner:coV7FZLhCTHcwj1n@cluster0.3b27rx8.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("database connected successfully")
    app.listen(PORT)
  })
  .catch((err) => console.log(`error : ${err.massage}`))
