/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatTextWrappingClipPaths from "./paths/FormatTextWrappingClip";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatTextWrappingClip = createSvgIcon(FormatTextWrappingClipPaths, "FormatTextWrappingClip") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatTextWrappingClip;
