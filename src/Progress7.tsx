/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import Progress7Paths from "./paths/Progress7";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Progress7 = createSvgIcon(Progress7Paths, "Progress7") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Progress7;
