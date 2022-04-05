/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SubtitlesOPaths from "./paths/SubtitlesO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SubtitlesO = createSvgIcon(SubtitlesOPaths, "SubtitlesO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SubtitlesO;
