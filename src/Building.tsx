/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BuildingPaths from "./paths/Building";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Building = createSvgIcon(BuildingPaths, "Building") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Building;
