/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CoffeePaths from "./paths/Coffee";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Coffee = createSvgIcon(CoffeePaths, "Coffee") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Coffee;
