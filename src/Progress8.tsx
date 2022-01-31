/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import Progress8Paths from "./paths/Progress8";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Progress8 = createSvgIcon(Progress8Paths, "Progress8") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Progress8;
