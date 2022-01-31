/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import Progress3Paths from "./paths/Progress3";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Progress3 = createSvgIcon(Progress3Paths, "Progress3") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Progress3;
