/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatAlignLeftPaths from "./paths/FormatAlignLeft";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatAlignLeft = createSvgIcon(FormatAlignLeftPaths, "FormatAlignLeft") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatAlignLeft;
