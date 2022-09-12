import express from "express";
import cors from "cors";
import joi from "joi";

import {
  createUser,
  createSession,
  deleteSession,
} from "./src/controllers/auth.controllers.js";
import { createTransaction } from "./src/controllers/wallet.controllers.js";

const app = express();
app.use(cors());
app.use(express.json());

const port = "5000";

app.post("/sign-up", createUser);

app.post("/sign-in", createSession);

app.delete("/sign-out", deleteSession);

app.post("/transactions", createTransaction);

app.listen(port, () => console.log("Listening on port 5000!"));
