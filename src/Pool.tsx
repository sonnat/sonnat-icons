/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PoolPaths from "./paths/Pool";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Pool = createSvgIcon(PoolPaths, "Pool") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Pool;
