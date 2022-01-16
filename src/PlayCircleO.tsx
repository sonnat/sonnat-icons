/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PlayCircleOPaths from "./paths/PlayCircleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PlayCircleO = createSvgIcon(PlayCircleOPaths, "PlayCircleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PlayCircleO;
