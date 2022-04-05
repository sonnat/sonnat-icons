/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatColorFillPaths from "./paths/FormatColorFill";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatColorFill = createSvgIcon(FormatColorFillPaths, "FormatColorFill") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatColorFill;
