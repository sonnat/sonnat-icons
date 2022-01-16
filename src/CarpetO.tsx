/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarpetOPaths from "./paths/CarpetO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CarpetO = createSvgIcon(CarpetOPaths, "CarpetO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CarpetO;
