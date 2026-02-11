import { Schema, model, Document } from "mongoose";

export interface IItem extends 
Document {
  id:string;
  image: string;
  title: string;
  price: number;
  review: {
  stars:number;
  reviews: number;
};
}

const itemSchema = new Schema<IItem>(
  {
    
    id:{
      type: String,
      required: true
    },
    image:{
      type: String,
      required: true
    },
    title: {
      type:String,
      required: true
    },
    price:{
      type:Number,
      required:true,
    },
    review:{
      stars:{
        type: Number,
        required:true
      },
      reviews:{
        type: Number,
        required:true
      }
    }
  },
  {
    timestamps:true
  }
)

export const Item = model<IItem>('Item',itemSchema)