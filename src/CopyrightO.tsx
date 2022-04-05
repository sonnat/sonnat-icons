/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CopyrightOPaths from "./paths/CopyrightO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CopyrightO = createSvgIcon(CopyrightOPaths, "CopyrightO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CopyrightO;
