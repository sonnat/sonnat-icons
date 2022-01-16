/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CogOPaths from "./paths/CogO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CogO = createSvgIcon(CogOPaths, "CogO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CogO;
