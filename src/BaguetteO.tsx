/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BaguetteOPaths from "./paths/BaguetteO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BaguetteO = createSvgIcon(BaguetteOPaths, "BaguetteO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BaguetteO;
