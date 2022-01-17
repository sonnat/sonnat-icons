/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import RadioBlankOPaths from "./paths/RadioBlankO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const RadioBlankO = createSvgIcon(RadioBlankOPaths, "RadioBlankO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default RadioBlankO;
