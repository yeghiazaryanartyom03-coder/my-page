import { Route } from "react-router";
import { ShopHomePage } from "./ShopHomePage";
import { ShopCart } from "./ShopCart";

export const ShopRouter = (
  <>
    <Route index element={<ShopHomePage />} />
    <Route path="cart" element={<ShopCart />} />
  </>
);
