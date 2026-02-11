import { Router } from "express";
import { Item } from "../models/Item";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});

export default router;
