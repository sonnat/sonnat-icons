/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BellPaths from "./paths/Bell";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Bell = createSvgIcon(BellPaths, "Bell") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Bell;
