/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatPaintOPaths from "./paths/FormatPaintO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatPaintO = createSvgIcon(FormatPaintOPaths, "FormatPaintO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatPaintO;
