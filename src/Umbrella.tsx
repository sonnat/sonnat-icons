/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import UmbrellaPaths from "./paths/Umbrella";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Umbrella = createSvgIcon(UmbrellaPaths, "Umbrella") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Umbrella;
