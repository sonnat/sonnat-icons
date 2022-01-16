/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CropLandscapePaths from "./paths/CropLandscape";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CropLandscape = createSvgIcon(CropLandscapePaths, "CropLandscape") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CropLandscape;
