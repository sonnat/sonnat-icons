/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import Progress5Paths from "./paths/Progress5";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Progress5 = createSvgIcon(Progress5Paths, "Progress5") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Progress5;
