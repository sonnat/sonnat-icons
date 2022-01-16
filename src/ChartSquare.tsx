/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChartSquarePaths from "./paths/ChartSquare";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChartSquare = createSvgIcon(ChartSquarePaths, "ChartSquare") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChartSquare;
