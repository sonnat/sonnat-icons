/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import StoreOPaths from "./paths/StoreO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const StoreO = createSvgIcon(StoreOPaths, "StoreO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default StoreO;
