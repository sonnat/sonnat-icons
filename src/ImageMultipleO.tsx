/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ImageMultipleOPaths from "./paths/ImageMultipleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ImageMultipleO = createSvgIcon(ImageMultipleOPaths, "ImageMultipleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ImageMultipleO;
