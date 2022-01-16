/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ShoppingBagPaths from "./paths/ShoppingBag";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ShoppingBag = createSvgIcon(ShoppingBagPaths, "ShoppingBag") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ShoppingBag;
