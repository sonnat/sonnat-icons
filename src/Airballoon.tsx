/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AirballoonPaths from "./paths/Airballoon";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Airballoon = createSvgIcon(AirballoonPaths, "Airballoon") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Airballoon;
