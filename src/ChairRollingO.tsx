/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChairRollingOPaths from "./paths/ChairRollingO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChairRollingO = createSvgIcon(ChairRollingOPaths, "ChairRollingO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChairRollingO;
