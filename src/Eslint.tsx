/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import EslintPaths from "./paths/Eslint";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Eslint = createSvgIcon(EslintPaths, "Eslint") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Eslint;
