/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatTextItalicPaths from "./paths/FormatTextItalic";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatTextItalic = createSvgIcon(FormatTextItalicPaths, "FormatTextItalic") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatTextItalic;
