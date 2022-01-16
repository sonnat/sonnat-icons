/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChevronRightCircleOPaths from "./paths/ChevronRightCircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChevronRightCircleO = createSvgIcon(ChevronRightCircleOPaths, "ChevronRightCircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChevronRightCircleO;
