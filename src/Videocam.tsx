/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VideocamPaths from "./paths/Videocam";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Videocam = createSvgIcon(VideocamPaths, "Videocam") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Videocam;
