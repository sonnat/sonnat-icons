/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ImageMultiplePaths from "./paths/ImageMultiple";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ImageMultiple = createSvgIcon(ImageMultiplePaths, "ImageMultiple") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ImageMultiple;
