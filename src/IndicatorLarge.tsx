/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import IndicatorLargePaths from "./paths/IndicatorLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const IndicatorLarge = createSvgIcon(IndicatorLargePaths, "IndicatorLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default IndicatorLarge;
