/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VideocamOPaths from "./paths/VideocamO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const VideocamO = createSvgIcon(VideocamOPaths, "VideocamO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default VideocamO;
