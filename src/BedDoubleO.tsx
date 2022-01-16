/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BedDoubleOPaths from "./paths/BedDoubleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BedDoubleO = createSvgIcon(BedDoubleOPaths, "BedDoubleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BedDoubleO;
