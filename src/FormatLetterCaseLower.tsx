/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatLetterCaseLowerPaths from "./paths/FormatLetterCaseLower";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatLetterCaseLower = createSvgIcon(FormatLetterCaseLowerPaths, "FormatLetterCaseLower") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatLetterCaseLower;
