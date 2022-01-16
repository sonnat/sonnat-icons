/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PinVariantPaths from "./paths/PinVariant";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PinVariant = createSvgIcon(PinVariantPaths, "PinVariant") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PinVariant;
