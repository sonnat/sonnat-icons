/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AppleKeyboardShiftPaths from "./paths/AppleKeyboardShift";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const AppleKeyboardShift = createSvgIcon(AppleKeyboardShiftPaths, "AppleKeyboardShift") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default AppleKeyboardShift;
