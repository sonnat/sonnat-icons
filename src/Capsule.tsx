/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CapsulePaths from "./paths/Capsule";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Capsule = createSvgIcon(CapsulePaths, "Capsule") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Capsule;
