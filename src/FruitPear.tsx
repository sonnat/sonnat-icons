/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FruitPearPaths from "./paths/FruitPear";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FruitPear = createSvgIcon(FruitPearPaths, "FruitPear") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FruitPear;
