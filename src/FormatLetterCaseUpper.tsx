/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatLetterCaseUpperPaths from "./paths/FormatLetterCaseUpper";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatLetterCaseUpper = createSvgIcon(FormatLetterCaseUpperPaths, "FormatLetterCaseUpper") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatLetterCaseUpper;
