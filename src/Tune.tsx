/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TunePaths from "./paths/Tune";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Tune = createSvgIcon(TunePaths, "Tune") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Tune;
