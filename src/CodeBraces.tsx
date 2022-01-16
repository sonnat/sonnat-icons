/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CodeBracesPaths from "./paths/CodeBraces";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CodeBraces = createSvgIcon(CodeBracesPaths, "CodeBraces") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CodeBraces;
