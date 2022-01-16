/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ShieldCheckOPaths from "./paths/ShieldCheckO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ShieldCheckO = createSvgIcon(ShieldCheckOPaths, "ShieldCheckO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ShieldCheckO;
