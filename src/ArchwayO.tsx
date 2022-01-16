/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ArchwayOPaths from "./paths/ArchwayO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ArchwayO = createSvgIcon(ArchwayOPaths, "ArchwayO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ArchwayO;
