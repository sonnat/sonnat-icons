/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MinusPaths from "./paths/Minus";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Minus = createSvgIcon(MinusPaths, "Minus") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Minus;
