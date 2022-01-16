/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ScriptVariantOPaths from "./paths/ScriptVariantO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ScriptVariantO = createSvgIcon(ScriptVariantOPaths, "ScriptVariantO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ScriptVariantO;
