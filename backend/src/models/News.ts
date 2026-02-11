import { Schema,model,Document } from "mongoose";

export interface INews extends Document {
  title: string,
  auther: string,
  vews: number,
  image: string,
}

const NewsSchema = new Schema<INews>({
  title: {type:String, required:true},
  auther: {type:String, required:true},
  vews: {type:Number},
  image: {type:String, required:true},
})

export const News = model<INews>('News', NewsSchema)