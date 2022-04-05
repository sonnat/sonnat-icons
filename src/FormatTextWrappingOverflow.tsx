/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatTextWrappingOverflowPaths from "./paths/FormatTextWrappingOverflow";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatTextWrappingOverflow = createSvgIcon(FormatTextWrappingOverflowPaths, "FormatTextWrappingOverflow") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatTextWrappingOverflow;
