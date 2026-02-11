import { Schema,model,Document } from "mongoose";

export interface IPlayer extends Document {
  name: string;
  surname: string;
  shirtNumber: number;
  appearances: number,
  position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward';
  image: string,
  goals?: number,
  assists?: number,
  cleanSheets?: number,
  saves?:number,
}

const PlayerSchema = new Schema<IPlayer>({
  name: {type: String, required:true},
  surname: {type: String, required:true},
  shirtNumber: {type: Number},
  appearances : {type: Number},
  position: {type: String, enum:['goalkeeper', 'defender', 'midfielder', 'forward'], required: true},
  image: {type: String, required:true},
  goals: {type: Number},
  assists: {type: Number},
  cleanSheets: {type: Number},
  saves: {type: Number},

})

export const Player = model<IPlayer>('Player', PlayerSchema);