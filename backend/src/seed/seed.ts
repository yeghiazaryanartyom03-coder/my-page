import mongoose from "mongoose";
import { History } from "../models/History";
import dotenv from "dotenv";
import { Player } from "../models/Player";
import { News } from "../models/News";
import { Legend } from "../models/Legend";
import { Match } from "../models/Match";
import { Item } from "../models/Item";
import { newsSeed } from "./seedArrays/newsSeed";
import { playerSeed } from "./seedArrays/playerSeed";
import { matchSeed } from "./seedArrays/matchSeed";
import { historySeed } from "./seedArrays/historySeed";
import { legendSeed } from "./seedArrays/legendSeed";
import { itemSeed } from "./seedArrays/itemSeed";

dotenv.config();



const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    await History.deleteMany({});
    await History.insertMany(historySeed);
    await Player.deleteMany({});
    await Player.insertMany(playerSeed);
    await News.deleteMany({});
    await News.insertMany(newsSeed);
    await Legend.deleteMany({});
    await Legend.insertMany(legendSeed);
    await Match.deleteMany({});
    await Match.insertMany(matchSeed);
    await Item.deleteMany({});
    await Item.insertMany(itemSeed);
    console.log("Database seeded!");
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

seedDB();
