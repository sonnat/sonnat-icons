/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PlayPaths from "./paths/Play";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Play = createSvgIcon(PlayPaths, "Play") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Play;
