/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LampOPaths from "./paths/LampO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LampO = createSvgIcon(LampOPaths, "LampO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LampO;
