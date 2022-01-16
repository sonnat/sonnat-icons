/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ArrowLeftBoldPaths from "./paths/ArrowLeftBold";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ArrowLeftBold = createSvgIcon(ArrowLeftBoldPaths, "ArrowLeftBold") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ArrowLeftBold;
