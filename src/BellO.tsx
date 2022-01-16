/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BellOPaths from "./paths/BellO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BellO = createSvgIcon(BellOPaths, "BellO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BellO;
