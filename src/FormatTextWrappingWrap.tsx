/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatTextWrappingWrapPaths from "./paths/FormatTextWrappingWrap";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatTextWrappingWrap = createSvgIcon(FormatTextWrappingWrapPaths, "FormatTextWrappingWrap") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatTextWrappingWrap;
