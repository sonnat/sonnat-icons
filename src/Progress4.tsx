/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import Progress4Paths from "./paths/Progress4";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Progress4 = createSvgIcon(Progress4Paths, "Progress4") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Progress4;
