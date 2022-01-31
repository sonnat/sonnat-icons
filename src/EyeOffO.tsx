/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import EyeOffOPaths from "./paths/EyeOffO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const EyeOffO = createSvgIcon(EyeOffOPaths, "EyeOffO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default EyeOffO;
