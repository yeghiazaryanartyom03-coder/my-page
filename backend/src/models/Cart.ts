
import { Schema, model, Document } from "mongoose";

export interface ICart extends Document {
  cartId: string;
  items: {
    itemId: string;
    quantity: number;
  }[];
  expiresAt?: Date;
  updatedAt?: Date
}

const cartSchema = new Schema<ICart>(
  {
    cartId: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    items: [
      {
        itemId: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    expiresAt:{
      type: Date,
      default: () => new Date(Date.now() + 30*24*60*60*1000),
    },
  },
  {
    timestamps: true,
  },
);


cartSchema.index({expiresAt: 1},{expireAfterSeconds:0})

export const Cart = model<ICart>("Cart", cartSchema);
