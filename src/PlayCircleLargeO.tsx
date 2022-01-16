/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PlayCircleLargeOPaths from "./paths/PlayCircleLargeO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PlayCircleLargeO = createSvgIcon(PlayCircleLargeOPaths, "PlayCircleLargeO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PlayCircleLargeO;
