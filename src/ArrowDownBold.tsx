/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ArrowDownBoldPaths from "./paths/ArrowDownBold";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ArrowDownBold = createSvgIcon(ArrowDownBoldPaths, "ArrowDownBold") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ArrowDownBold;
