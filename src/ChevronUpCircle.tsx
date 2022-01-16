/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChevronUpCirclePaths from "./paths/ChevronUpCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChevronUpCircle = createSvgIcon(ChevronUpCirclePaths, "ChevronUpCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChevronUpCircle;
