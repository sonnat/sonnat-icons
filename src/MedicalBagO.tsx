/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MedicalBagOPaths from "./paths/MedicalBagO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MedicalBagO = createSvgIcon(MedicalBagOPaths, "MedicalBagO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MedicalBagO;
