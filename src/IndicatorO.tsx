/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import IndicatorOPaths from "./paths/IndicatorO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const IndicatorO = createSvgIcon(IndicatorOPaths, "IndicatorO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default IndicatorO;
