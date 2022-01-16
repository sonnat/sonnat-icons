/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LeafOPaths from "./paths/LeafO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LeafO = createSvgIcon(LeafOPaths, "LeafO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LeafO;
