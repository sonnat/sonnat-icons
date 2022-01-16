/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TrendingUpPaths from "./paths/TrendingUp";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TrendingUp = createSvgIcon(TrendingUpPaths, "TrendingUp") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TrendingUp;
