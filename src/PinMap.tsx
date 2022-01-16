/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PinMapPaths from "./paths/PinMap";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PinMap = createSvgIcon(PinMapPaths, "PinMap") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PinMap;
