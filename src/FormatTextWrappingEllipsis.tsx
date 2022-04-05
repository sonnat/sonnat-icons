/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatTextWrappingEllipsisPaths from "./paths/FormatTextWrappingEllipsis";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatTextWrappingEllipsis = createSvgIcon(FormatTextWrappingEllipsisPaths, "FormatTextWrappingEllipsis") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatTextWrappingEllipsis;
