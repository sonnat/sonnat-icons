/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import IndicatorPaths from "./paths/Indicator";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Indicator = createSvgIcon(IndicatorPaths, "Indicator") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Indicator;
