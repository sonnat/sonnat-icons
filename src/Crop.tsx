/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CropPaths from "./paths/Crop";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Crop = createSvgIcon(CropPaths, "Crop") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Crop;
