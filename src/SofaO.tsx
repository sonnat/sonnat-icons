/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SofaOPaths from "./paths/SofaO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SofaO = createSvgIcon(SofaOPaths, "SofaO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SofaO;
