/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import RocketOPaths from "./paths/RocketO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const RocketO = createSvgIcon(RocketOPaths, "RocketO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default RocketO;
