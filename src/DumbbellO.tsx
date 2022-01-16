/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DumbbellOPaths from "./paths/DumbbellO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DumbbellO = createSvgIcon(DumbbellOPaths, "DumbbellO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DumbbellO;
