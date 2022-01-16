/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CropSquarePaths from "./paths/CropSquare";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CropSquare = createSvgIcon(CropSquarePaths, "CropSquare") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CropSquare;
