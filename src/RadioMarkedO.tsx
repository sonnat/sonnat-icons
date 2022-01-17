/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import RadioMarkedOPaths from "./paths/RadioMarkedO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const RadioMarkedO = createSvgIcon(RadioMarkedOPaths, "RadioMarkedO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default RadioMarkedO;
