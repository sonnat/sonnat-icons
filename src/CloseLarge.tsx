/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CloseLargePaths from "./paths/CloseLarge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CloseLarge = createSvgIcon(CloseLargePaths, "CloseLarge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CloseLarge;
