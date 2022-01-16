/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WrenchOPaths from "./paths/WrenchO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WrenchO = createSvgIcon(WrenchOPaths, "WrenchO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WrenchO;
