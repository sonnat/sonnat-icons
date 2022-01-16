/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ImagePaths from "./paths/Image";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Image = createSvgIcon(ImagePaths, "Image") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Image;
