import { Schema, model, Document } from "mongoose";

export interface IHistory extends Document {
  image: string;
  title: string;
  startingText: string;

  period: string;
  slug: string;

  description: string;

  keyMoments: {
    title: string;
    description: string;
  }[];

  statistics: {
    championsLeague: number;
    laLiga: number;
    copaDelRey: number;
    clubWorldCup: number;
    totalTrophies: number;
  };

  legends: {
    name: string;
    position: string;
    image: string;
  }[];

  timeline: {
    year: number;
    event: string;
  }[];

  createdAt: Date;
  updatedAt: Date;
}

const KeyMomentSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true }
  },
  { _id: false }
);

const LegendSchema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    image: { type: String, required: true }
  },
  { _id: false }
);

const TimelineEventSchema = new Schema(
  {
    year: { type: Number, required: true },
    event: { type: String, required: true }
  },
  { _id: false }
);

const StatisticsSchema = new Schema(
  {
    championsLeague: { type: Number, default: 0 },
    laLiga: { type: Number, default: 0 },
    copaDelRey: { type: Number, default: 0 },
    clubWorldCup: { type: Number, default: 0 },
    totalTrophies: { type: Number, default: 0 }
  },
  { _id: false }
);

/* ===============================
   Main Schema
================================= */

const HistorySchema = new Schema<IHistory>(
  {
    image: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    startingText: {
      type: String,
      required: true
    },

    period: {
      type: String,
      required: true
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    description: {
      type: String,
      required: true,
    },

    keyMoments: {
      type: [KeyMomentSchema],
      default: []
    },

    statistics: {
      type: StatisticsSchema,
      required: true
    },

    legends: {
      type: [LegendSchema],
      default: []
    },

    timeline: {
      type: [TimelineEventSchema],
      default: []
    }
  },
  {
    timestamps: true
  }
);

export const History = model<IHistory>('History',HistorySchema)