/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WrenchPaths from "./paths/Wrench";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Wrench = createSvgIcon(WrenchPaths, "Wrench") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Wrench;
