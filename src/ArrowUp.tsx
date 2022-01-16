/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ArrowUpPaths from "./paths/ArrowUp";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ArrowUp = createSvgIcon(ArrowUpPaths, "ArrowUp") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ArrowUp;
