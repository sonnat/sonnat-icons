/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PoliceOPaths from "./paths/PoliceO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PoliceO = createSvgIcon(PoliceOPaths, "PoliceO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PoliceO;
