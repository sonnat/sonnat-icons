/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FruitPearOPaths from "./paths/FruitPearO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FruitPearO = createSvgIcon(FruitPearOPaths, "FruitPearO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FruitPearO;
