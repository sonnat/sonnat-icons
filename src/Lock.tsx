/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LockPaths from "./paths/Lock";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Lock = createSvgIcon(LockPaths, "Lock") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Lock;
