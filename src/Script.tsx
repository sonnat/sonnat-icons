/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ScriptPaths from "./paths/Script";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Script = createSvgIcon(ScriptPaths, "Script") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Script;
