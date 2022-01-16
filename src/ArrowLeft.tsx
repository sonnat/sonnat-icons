/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ArrowLeftPaths from "./paths/ArrowLeft";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ArrowLeft = createSvgIcon(ArrowLeftPaths, "ArrowLeft") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ArrowLeft;
