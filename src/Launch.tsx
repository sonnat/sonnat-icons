/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LaunchPaths from "./paths/Launch";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Launch = createSvgIcon(LaunchPaths, "Launch") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Launch;
