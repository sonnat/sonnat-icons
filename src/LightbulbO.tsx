/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LightbulbOPaths from "./paths/LightbulbO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LightbulbO = createSvgIcon(LightbulbOPaths, "LightbulbO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LightbulbO;
