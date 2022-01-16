/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ShareVariantPaths from "./paths/ShareVariant";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ShareVariant = createSvgIcon(ShareVariantPaths, "ShareVariant") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ShareVariant;
