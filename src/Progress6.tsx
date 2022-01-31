/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import Progress6Paths from "./paths/Progress6";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Progress6 = createSvgIcon(Progress6Paths, "Progress6") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Progress6;
