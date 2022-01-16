/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FlashOPaths from "./paths/FlashO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FlashO = createSvgIcon(FlashOPaths, "FlashO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FlashO;
