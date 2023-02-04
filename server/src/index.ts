import express, { Request, Response } from "express"
import mongoose from "mongoose"
import { config } from "dotenv"
import cors from "cors"

import { getDecksController } from "./controllers/getDeckscontroller"
import { createDeckController } from "./controllers/createDeckController"
import { deleteDeckController } from "./controllers/deleteDeckController"
import { createCardController } from "./controllers/createCardController"
import { getDeckController } from "./controllers/getDeckcontroller"
import { deleteCardController } from './controllers/deleteCardController';

config()
const app = express()
app.use(express.json())
app.use(cors())


app.get("/decks", getDecksController)
app.post("/decks", createDeckController)
app.delete("/decks/:deckId", deleteDeckController)
app.get("/decks/:deckId", getDeckController)
app.post("/decks/:deckId/cards", createCardController)
app.delete("/decks/:deckId/cards/:index", deleteCardController)



mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL!)
  .then(() => {
    console.log("database connected successfully")
    app.listen(process.env.PORT)
  })
  .catch((err) => console.log(`error : ${err.massage}`))
