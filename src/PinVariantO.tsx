/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PinVariantOPaths from "./paths/PinVariantO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PinVariantO = createSvgIcon(PinVariantOPaths, "PinVariantO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PinVariantO;
