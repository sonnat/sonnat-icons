/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LanguageMarkdownPaths from "./paths/LanguageMarkdown";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const LanguageMarkdown = createSvgIcon(LanguageMarkdownPaths, "LanguageMarkdown") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default LanguageMarkdown;
