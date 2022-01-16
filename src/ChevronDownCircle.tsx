/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChevronDownCirclePaths from "./paths/ChevronDownCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChevronDownCircle = createSvgIcon(ChevronDownCirclePaths, "ChevronDownCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChevronDownCircle;
