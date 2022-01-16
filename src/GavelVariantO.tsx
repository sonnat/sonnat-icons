/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import GavelVariantOPaths from "./paths/GavelVariantO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const GavelVariantO = createSvgIcon(GavelVariantOPaths, "GavelVariantO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default GavelVariantO;
