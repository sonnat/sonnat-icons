/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ShoppingBagOPaths from "./paths/ShoppingBagO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ShoppingBagO = createSvgIcon(ShoppingBagOPaths, "ShoppingBagO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ShoppingBagO;
