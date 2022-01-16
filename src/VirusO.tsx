/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VirusOPaths from "./paths/VirusO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const VirusO = createSvgIcon(VirusOPaths, "VirusO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default VirusO;
