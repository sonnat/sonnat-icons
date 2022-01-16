/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ClosePaths from "./paths/Close";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Close = createSvgIcon(ClosePaths, "Close") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Close;
