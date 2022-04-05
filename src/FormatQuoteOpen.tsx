/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FormatQuoteOpenPaths from "./paths/FormatQuoteOpen";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FormatQuoteOpen = createSvgIcon(FormatQuoteOpenPaths, "FormatQuoteOpen") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FormatQuoteOpen;
