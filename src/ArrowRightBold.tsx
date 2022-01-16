/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ArrowRightBoldPaths from "./paths/ArrowRightBold";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ArrowRightBold = createSvgIcon(ArrowRightBoldPaths, "ArrowRightBold") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ArrowRightBold;
