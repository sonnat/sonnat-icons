/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CompassPaths from "./paths/Compass";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Compass = createSvgIcon(CompassPaths, "Compass") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Compass;
