import { Schema, model, Document } from "mongoose";

export interface IHistory extends 
Document {
  image: string;
  title: string;
  startingText: string;
}

const historySchema = new Schema<IHistory>(
  {
    image:{
      type: String,
      required: true
    },
    title: {
      type:String,
      required: true
    },
    startingText:{
      type: String,
      required: true
    }
  },
  {
    timestamps:true
  }
)

export const History = model<IHistory>('History',historySchema)