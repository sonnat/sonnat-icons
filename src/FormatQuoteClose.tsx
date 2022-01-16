/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatQuoteClosePaths from "./paths/FormatQuoteClose";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatQuoteClose = createSvgIcon(FormatQuoteClosePaths, "FormatQuoteClose") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatQuoteClose;
