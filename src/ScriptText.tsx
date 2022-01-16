/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ScriptTextPaths from "./paths/ScriptText";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ScriptText = createSvgIcon(ScriptTextPaths, "ScriptText") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ScriptText;
