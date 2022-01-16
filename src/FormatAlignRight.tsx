/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatAlignRightPaths from "./paths/FormatAlignRight";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatAlignRight = createSvgIcon(FormatAlignRightPaths, "FormatAlignRight") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatAlignRight;
