/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HospitalSquareOPaths from "./paths/HospitalSquareO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const HospitalSquareO = createSvgIcon(HospitalSquareOPaths, "HospitalSquareO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default HospitalSquareO;
