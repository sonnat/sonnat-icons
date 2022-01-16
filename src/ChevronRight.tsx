/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChevronRightPaths from "./paths/ChevronRight";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChevronRight = createSvgIcon(ChevronRightPaths, "ChevronRight") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChevronRight;
