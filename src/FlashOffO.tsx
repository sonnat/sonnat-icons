/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FlashOffOPaths from "./paths/FlashOffO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FlashOffO = createSvgIcon(FlashOffOPaths, "FlashOffO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FlashOffO;
