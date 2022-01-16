/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LockOPaths from "./paths/LockO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LockO = createSvgIcon(LockOPaths, "LockO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LockO;
