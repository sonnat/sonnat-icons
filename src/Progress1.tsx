/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import Progress1Paths from "./paths/Progress1";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Progress1 = createSvgIcon(Progress1Paths, "Progress1") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Progress1;
