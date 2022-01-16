/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ScriptVariantPaths from "./paths/ScriptVariant";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ScriptVariant = createSvgIcon(ScriptVariantPaths, "ScriptVariant") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ScriptVariant;
