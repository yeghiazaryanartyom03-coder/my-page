import { Schema, model, Document } from "mongoose";

export type Position = 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';

export interface IBiographyChapter {
  title: string;
  text: string;
}

export interface IQuote {
  text: string;
  author: string;
}

export interface IStats {
  matches: number;
  goals?: number;
  assists?: number;
  cleanShets?: number;
  trophies: number;
}

export interface IAchievement {
  name: string;
  count: number;
}

// Основной интерфейс легенды
export interface ILegend extends Document {
  image: string;
  name: string;
  fullName: string;
  startingText: string;
  position: Position;
  birthDate: string;        // можно хранить как строку, например "24 June 1987"
  nationality: string;
  height: string;           // например "170 cm"
  biography: IBiographyChapter[];
  quote: IQuote;
  stats: IStats;
  achievements: IAchievement[];
}

// Схемы для вложенных документов
const BiographyChapterSchema = new Schema<IBiographyChapter>({
  title: { type: String, required: true },
  text: { type: String, required: true }
});

const QuoteSchema = new Schema<IQuote>({
  text: { type: String, required: true },
  author: { type: String, required: true }
});

const StatsSchema = new Schema<IStats>({
  matches: { type: Number, required: true, default: 0 },
  goals: { type: Number, default: 0 },
  assists: { type: Number, default: 0 },
  cleanShets: { type: Number, default: 0 },
  trophies: { type: Number, required: true, default: 0 }
});

const AchievementSchema = new Schema<IAchievement>({
  name: { type: String, required: true },
  count: { type: Number, required: true }
});

// Основная схема
const legendSchema = new Schema<ILegend>(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    fullName: { type: String, required: true },
    startingText: { type: String, required: true },
    position: {
      type: String,
      enum: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'],
      required: true
    },
    birthDate: { type: String, required: true },
    nationality: { type: String, required: true },
    height: { type: String, required: true },
    biography: { type: [BiographyChapterSchema], required: true },
    quote: { type: QuoteSchema, required: true },
    stats: { type: StatsSchema, required: true },
    achievements: { type: [AchievementSchema], required: true }
  },
  {
    timestamps: true
  }
);

export const Legend = model<ILegend>('Legend',legendSchema)