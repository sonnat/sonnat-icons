/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import KarnamehPaths from "./paths/Karnameh";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Karnameh = createSvgIcon(KarnamehPaths, "Karnameh") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Karnameh;
