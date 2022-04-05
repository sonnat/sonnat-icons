/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatLetterSpacingPaths from "./paths/FormatLetterSpacing";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatLetterSpacing = createSvgIcon(FormatLetterSpacingPaths, "FormatLetterSpacing") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatLetterSpacing;
