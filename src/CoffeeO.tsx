/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CoffeeOPaths from "./paths/CoffeeO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CoffeeO = createSvgIcon(CoffeeOPaths, "CoffeeO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CoffeeO;
