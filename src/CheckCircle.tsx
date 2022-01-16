/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CheckCirclePaths from "./paths/CheckCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CheckCircle = createSvgIcon(CheckCirclePaths, "CheckCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CheckCircle;
