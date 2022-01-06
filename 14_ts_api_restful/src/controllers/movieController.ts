import { Request, Response } from "express";

// Model
import { MovieModel } from "../models/Movie";

// Logger
import Logger from "../../config/logger";

// Validator
import { validationResult } from "express-validator";

export async function createMovie(req: Request, res: Response) {
  try {
    const errors = validationResult(req);

    console.log(errors);

    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (e) {}
}
