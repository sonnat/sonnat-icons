/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import RocketLaunchPaths from "./paths/RocketLaunch";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const RocketLaunch = createSvgIcon(RocketLaunchPaths, "RocketLaunch") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default RocketLaunch;
