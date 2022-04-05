/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import RadioMultipleMarkedPaths from "./paths/RadioMultipleMarked";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const RadioMultipleMarked = createSvgIcon(RadioMultipleMarkedPaths, "RadioMultipleMarked") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default RadioMultipleMarked;
