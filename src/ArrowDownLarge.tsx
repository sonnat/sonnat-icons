/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ArrowDownLargePaths from "./paths/ArrowDownLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ArrowDownLarge = createSvgIcon(ArrowDownLargePaths, "ArrowDownLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ArrowDownLarge;
