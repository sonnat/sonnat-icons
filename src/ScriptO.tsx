/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ScriptOPaths from "./paths/ScriptO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ScriptO = createSvgIcon(ScriptOPaths, "ScriptO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ScriptO;
