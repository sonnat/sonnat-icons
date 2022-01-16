/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import StickerCircleOPaths from "./paths/StickerCircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const StickerCircleO = createSvgIcon(StickerCircleOPaths, "StickerCircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default StickerCircleO;
