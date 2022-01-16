/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import StethoscopePaths from "./paths/Stethoscope";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Stethoscope = createSvgIcon(StethoscopePaths, "Stethoscope") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Stethoscope;
