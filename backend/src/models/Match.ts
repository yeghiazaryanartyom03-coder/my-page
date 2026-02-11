import { Schema, model, Document } from "mongoose";

export interface IMatch extends 
Document {
  apponent: string,
  stadium: string,
  tournament: string,
  image: string,
  isInHome: boolean,
  date: string,
  goalBarca?: number,
  goalApponent?: number,
}

const matchSchema = new Schema<IMatch>(
  {
    apponent:{
      type: String,
      required: true
    },
    stadium: {
      type:String,
      required: true
    },
    tournament:{
      type: String,
      required: true
    },
    image:{
      type: String,
      required: true
    },
    isInHome: {
      type: Boolean,
      required: true
    },
    date:{
      type: String,
      required: true
    },
    goalBarca:{
      type: Number
    },
    goalApponent:{
      type: Number
    },
  },
  {
    timestamps:true
  }
)

export const Match = model<IMatch>('Match', matchSchema)