/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CartOPaths from "./paths/CartO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CartO = createSvgIcon(CartOPaths, "CartO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CartO;
