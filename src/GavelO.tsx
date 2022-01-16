/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import GavelOPaths from "./paths/GavelO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const GavelO = createSvgIcon(GavelOPaths, "GavelO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default GavelO;
