/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChartPaths from "./paths/Chart";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Chart = createSvgIcon(ChartPaths, "Chart") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Chart;
