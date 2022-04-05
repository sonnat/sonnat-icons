/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import YoutubePaths from "./paths/Youtube";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Youtube = createSvgIcon(YoutubePaths, "Youtube") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Youtube;
