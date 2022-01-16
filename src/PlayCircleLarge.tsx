/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PlayCircleLargePaths from "./paths/PlayCircleLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PlayCircleLarge = createSvgIcon(PlayCircleLargePaths, "PlayCircleLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PlayCircleLarge;
