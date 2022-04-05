/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatUnderlinePaths from "./paths/FormatUnderline";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatUnderline = createSvgIcon(FormatUnderlinePaths, "FormatUnderline") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatUnderline;
