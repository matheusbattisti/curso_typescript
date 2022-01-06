import { model, Schema } from "mongoose";

const movieSchema = new Schema(
  {
    title: { type: String },
  },
  {
    timestamps: true,
  }
);

export const MovieModel = model("Movie", movieSchema);
