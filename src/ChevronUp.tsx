/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChevronUpPaths from "./paths/ChevronUp";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChevronUp = createSvgIcon(ChevronUpPaths, "ChevronUp") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChevronUp;
