import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieController";
import { body, validationResult } from "express-validator";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working");
  })
  .post("/movie", body("title").isString(), createMovie);
