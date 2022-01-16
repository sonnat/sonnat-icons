/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChevronDownPaths from "./paths/ChevronDown";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChevronDown = createSvgIcon(ChevronDownPaths, "ChevronDown") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChevronDown;
