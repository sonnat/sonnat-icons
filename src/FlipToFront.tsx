/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FlipToFrontPaths from "./paths/FlipToFront";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FlipToFront = createSvgIcon(FlipToFrontPaths, "FlipToFront") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FlipToFront;
