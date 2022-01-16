/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MedicalBagPaths from "./paths/MedicalBag";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MedicalBag = createSvgIcon(MedicalBagPaths, "MedicalBag") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MedicalBag;
