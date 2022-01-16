/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BuildingOPaths from "./paths/BuildingO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BuildingO = createSvgIcon(BuildingOPaths, "BuildingO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BuildingO;
