/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PinOPaths from "./paths/PinO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PinO = createSvgIcon(PinOPaths, "PinO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PinO;
