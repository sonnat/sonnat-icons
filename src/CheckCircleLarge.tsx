/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CheckCircleLargePaths from "./paths/CheckCircleLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CheckCircleLarge = createSvgIcon(CheckCircleLargePaths, "CheckCircleLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CheckCircleLarge;
