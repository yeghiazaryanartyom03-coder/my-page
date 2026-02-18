import { Schema, model, Document } from "mongoose";

export interface INews extends Document {
  title: string;
  author: string;
  views: number;
  image: string;
}

const NewsSchema = new Schema<INews>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  views: { type: Number },
  image: { type: String, required: true },
});

export const News = model<INews>("News", NewsSchema);
