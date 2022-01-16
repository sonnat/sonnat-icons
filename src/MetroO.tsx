/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MetroOPaths from "./paths/MetroO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MetroO = createSvgIcon(MetroOPaths, "MetroO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MetroO;
