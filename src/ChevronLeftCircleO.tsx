/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChevronLeftCircleOPaths from "./paths/ChevronLeftCircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChevronLeftCircleO = createSvgIcon(ChevronLeftCircleOPaths, "ChevronLeftCircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChevronLeftCircleO;
