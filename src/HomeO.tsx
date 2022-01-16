/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HomeOPaths from "./paths/HomeO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const HomeO = createSvgIcon(HomeOPaths, "HomeO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default HomeO;
