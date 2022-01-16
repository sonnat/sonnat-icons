/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DumbbellPaths from "./paths/Dumbbell";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Dumbbell = createSvgIcon(DumbbellPaths, "Dumbbell") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Dumbbell;
