/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LanguageTypescriptPaths from "./paths/LanguageTypescript";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LanguageTypescript = createSvgIcon(LanguageTypescriptPaths, "LanguageTypescript") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LanguageTypescript;
