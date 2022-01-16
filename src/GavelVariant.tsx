/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import GavelVariantPaths from "./paths/GavelVariant";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const GavelVariant = createSvgIcon(GavelVariantPaths, "GavelVariant") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default GavelVariant;
