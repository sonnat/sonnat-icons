/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ShieldCheckCircleOPaths from "./paths/ShieldCheckCircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ShieldCheckCircleO = createSvgIcon(ShieldCheckCircleOPaths, "ShieldCheckCircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ShieldCheckCircleO;
