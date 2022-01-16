/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PlayOPaths from "./paths/PlayO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PlayO = createSvgIcon(PlayOPaths, "PlayO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PlayO;
