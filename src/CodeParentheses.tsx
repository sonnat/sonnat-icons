/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CodeParenthesesPaths from "./paths/CodeParentheses";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CodeParentheses = createSvgIcon(CodeParenthesesPaths, "CodeParentheses") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CodeParentheses;
