/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CheckPaths from "./paths/Check";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Check = createSvgIcon(CheckPaths, "Check") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Check;
