/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ArrowRightPaths from "./paths/ArrowRight";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ArrowRight = createSvgIcon(ArrowRightPaths, "ArrowRight") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ArrowRight;
