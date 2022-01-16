/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LightbulbPaths from "./paths/Lightbulb";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Lightbulb = createSvgIcon(LightbulbPaths, "Lightbulb") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Lightbulb;
