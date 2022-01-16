/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ArrowLeftLargePaths from "./paths/ArrowLeftLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ArrowLeftLarge = createSvgIcon(ArrowLeftLargePaths, "ArrowLeftLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ArrowLeftLarge;
