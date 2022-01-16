/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ImagePlusPaths from "./paths/ImagePlus";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ImagePlus = createSvgIcon(ImagePlusPaths, "ImagePlus") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ImagePlus;
