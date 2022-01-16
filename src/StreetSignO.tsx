/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import StreetSignOPaths from "./paths/StreetSignO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const StreetSignO = createSvgIcon(StreetSignOPaths, "StreetSignO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default StreetSignO;
