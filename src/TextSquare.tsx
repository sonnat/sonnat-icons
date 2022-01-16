/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TextSquarePaths from "./paths/TextSquare";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TextSquare = createSvgIcon(TextSquarePaths, "TextSquare") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TextSquare;
