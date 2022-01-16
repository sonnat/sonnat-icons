/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CheckCircleLargeOPaths from "./paths/CheckCircleLargeO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CheckCircleLargeO = createSvgIcon(CheckCircleLargeOPaths, "CheckCircleLargeO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CheckCircleLargeO;
