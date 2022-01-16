/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ScriptPlusPaths from "./paths/ScriptPlus";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ScriptPlus = createSvgIcon(ScriptPlusPaths, "ScriptPlus") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ScriptPlus;
