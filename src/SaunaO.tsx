/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SaunaOPaths from "./paths/SaunaO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SaunaO = createSvgIcon(SaunaOPaths, "SaunaO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SaunaO;
