/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CartPaths from "./paths/Cart";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Cart = createSvgIcon(CartPaths, "Cart") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Cart;
