/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ArrowUpLargePaths from "./paths/ArrowUpLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ArrowUpLarge = createSvgIcon(ArrowUpLargePaths, "ArrowUpLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ArrowUpLarge;