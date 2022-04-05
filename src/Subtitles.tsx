/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SubtitlesPaths from "./paths/Subtitles";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Subtitles = createSvgIcon(SubtitlesPaths, "Subtitles") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Subtitles;
