/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CodeBracketsPaths from "./paths/CodeBrackets";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CodeBrackets = createSvgIcon(CodeBracketsPaths, "CodeBrackets") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CodeBrackets;
