/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MopedPaths from "./paths/Moped";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Moped = createSvgIcon(MopedPaths, "Moped") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Moped;
