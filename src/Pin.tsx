/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PinPaths from "./paths/Pin";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Pin = createSvgIcon(PinPaths, "Pin") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Pin;
