/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ArrowRightLargePaths from "./paths/ArrowRightLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ArrowRightLarge = createSvgIcon(ArrowRightLargePaths, "ArrowRightLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ArrowRightLarge;
