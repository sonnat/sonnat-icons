/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HospitalSquarePaths from "./paths/HospitalSquare";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const HospitalSquare = createSvgIcon(HospitalSquarePaths, "HospitalSquare") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default HospitalSquare;
