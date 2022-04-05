/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChevronDownSquarePaths from "./paths/ChevronDownSquare";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChevronDownSquare = createSvgIcon(ChevronDownSquarePaths, "ChevronDownSquare") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChevronDownSquare;
