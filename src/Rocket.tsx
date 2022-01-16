/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import RocketPaths from "./paths/Rocket";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Rocket = createSvgIcon(RocketPaths, "Rocket") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Rocket;
