/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ShieldCheckCirclePaths from "./paths/ShieldCheckCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ShieldCheckCircle = createSvgIcon(ShieldCheckCirclePaths, "ShieldCheckCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ShieldCheckCircle;
