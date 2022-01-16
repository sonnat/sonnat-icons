/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FlagOPaths from "./paths/FlagO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FlagO = createSvgIcon(FlagOPaths, "FlagO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FlagO;
