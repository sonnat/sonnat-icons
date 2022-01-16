/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PausePaths from "./paths/Pause";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Pause = createSvgIcon(PausePaths, "Pause") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Pause;
