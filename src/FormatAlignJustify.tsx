/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatAlignJustifyPaths from "./paths/FormatAlignJustify";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatAlignJustify = createSvgIcon(FormatAlignJustifyPaths, "FormatAlignJustify") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatAlignJustify;
