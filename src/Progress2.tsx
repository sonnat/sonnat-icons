/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import Progress2Paths from "./paths/Progress2";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Progress2 = createSvgIcon(Progress2Paths, "Progress2") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Progress2;
