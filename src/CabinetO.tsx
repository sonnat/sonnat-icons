/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CabinetOPaths from "./paths/CabinetO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CabinetO = createSvgIcon(CabinetOPaths, "CabinetO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CabinetO;
