/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BuildingVariantOPaths from "./paths/BuildingVariantO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BuildingVariantO = createSvgIcon(BuildingVariantOPaths, "BuildingVariantO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BuildingVariantO;
