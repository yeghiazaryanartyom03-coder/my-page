import { Schema, model, Document } from "mongoose";

export interface ILegend extends 
Document {
  image: string;
  name: string;
  startingText: string;
}

const legendSchema = new Schema<ILegend>(
  {
    image:{
      type: String,
      required: true
    },
    name: {
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

export const Legend = model<ILegend>('Legend',legendSchema)