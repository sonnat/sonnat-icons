/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LampPaths from "./paths/Lamp";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Lamp = createSvgIcon(LampPaths, "Lamp") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Lamp;
