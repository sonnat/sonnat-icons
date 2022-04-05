/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FlipToBackPaths from "./paths/FlipToBack";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FlipToBack = createSvgIcon(FlipToBackPaths, "FlipToBack") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FlipToBack;
