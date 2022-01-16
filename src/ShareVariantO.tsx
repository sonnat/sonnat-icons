/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ShareVariantOPaths from "./paths/ShareVariantO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ShareVariantO = createSvgIcon(ShareVariantOPaths, "ShareVariantO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ShareVariantO;
