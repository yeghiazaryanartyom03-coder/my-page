import { Schema, model, Document } from "mongoose";

export interface IPlayer extends Document {
  name: string;
  surname?: string;
  shirtNumber: number;
  age: number;
  nationality: string;
  biography: string[];
  tags: string[];
  position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward";
  image: string;
  stats: {
    total: {
      appearances: number;
      cleanSheets?: number; // note: typo preserved from interface
      saves?: number;
      goals?: number;
      assists?: number;
      goalConceded?: number;
    };
    seasons: {
      season: string;
      appearances: number;
      goals?: number;
      assists?: number;
      goalConceded?: number;
      cleanSheets?: number;
      saves?: number;
    }[];
  };
}

const PlayerSchema = new Schema<IPlayer>({
  name: { type: String, required: true },
  surname: { type: String }, // optional, so no required
  shirtNumber: { type: Number, required: true },
  age: { type: Number, required: true },
  nationality: { type: String, required: true },
  biography: [{ type: String, required: true }],
  tags: [{ type: String, required: true }],
  position: {
    type: String,
    enum: ["Goalkeeper", "Defender", "Midfielder", "Forward"],
    required: true,
  },
  image: { type: String, required: true },
  stats: {
    total: {
      appearances: { type: Number, required: true },
      cleanSheets: { type: Number },
      saves: { type: Number },
      goals: { type: Number },
      assists: { type: Number },
      goalConceded: { type: Number },
    },
    seasons: [
      {
        season: { type: String, required: true },
        appearances: { type: Number, required: true },
        goals: { type: Number },
        assists: { type: Number },
        goalConceded: { type: Number },
        cleanSheeets: { type: Number },
        saves: { type: Number },
      },
    ],
  },
});

export const Player = model<IPlayer>("Player", PlayerSchema);
