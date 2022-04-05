/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChevronDownSquareOPaths from "./paths/ChevronDownSquareO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChevronDownSquareO = createSvgIcon(ChevronDownSquareOPaths, "ChevronDownSquareO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChevronDownSquareO;
