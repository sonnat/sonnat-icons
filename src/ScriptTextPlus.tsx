/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ScriptTextPlusPaths from "./paths/ScriptTextPlus";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ScriptTextPlus = createSvgIcon(ScriptTextPlusPaths, "ScriptTextPlus") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ScriptTextPlus;
