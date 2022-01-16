/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChevronRightCirclePaths from "./paths/ChevronRightCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChevronRightCircle = createSvgIcon(ChevronRightCirclePaths, "ChevronRightCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChevronRightCircle;
