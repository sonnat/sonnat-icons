/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ImageOPaths from "./paths/ImageO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ImageO = createSvgIcon(ImageOPaths, "ImageO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ImageO;
