/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import IndicatorLargeOPaths from "./paths/IndicatorLargeO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const IndicatorLargeO = createSvgIcon(IndicatorLargeOPaths, "IndicatorLargeO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default IndicatorLargeO;
