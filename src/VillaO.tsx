/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VillaOPaths from "./paths/VillaO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const VillaO = createSvgIcon(VillaOPaths, "VillaO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default VillaO;
