/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BugOPaths from "./paths/BugO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BugO = createSvgIcon(BugOPaths, "BugO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BugO;
