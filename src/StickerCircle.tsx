/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import StickerCirclePaths from "./paths/StickerCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const StickerCircle = createSvgIcon(StickerCirclePaths, "StickerCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default StickerCircle;
