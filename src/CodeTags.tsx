/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CodeTagsPaths from "./paths/CodeTags";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CodeTags = createSvgIcon(CodeTagsPaths, "CodeTags") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CodeTags;
