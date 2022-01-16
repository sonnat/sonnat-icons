/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BoltPaths from "./paths/Bolt";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Bolt = createSvgIcon(BoltPaths, "Bolt") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Bolt;
