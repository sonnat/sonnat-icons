/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatPaintPaths from "./paths/FormatPaint";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatPaint = createSvgIcon(FormatPaintPaths, "FormatPaint") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatPaint;
