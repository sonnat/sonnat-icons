/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PlayCirclePaths from "./paths/PlayCircle";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PlayCircle = createSvgIcon(PlayCirclePaths, "PlayCircle") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PlayCircle;
