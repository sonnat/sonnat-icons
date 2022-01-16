/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChevronLeftCirclePaths from "./paths/ChevronLeftCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChevronLeftCircle = createSvgIcon(ChevronLeftCirclePaths, "ChevronLeftCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChevronLeftCircle;
