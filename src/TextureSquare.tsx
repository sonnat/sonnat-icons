/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TextureSquarePaths from "./paths/TextureSquare";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TextureSquare = createSvgIcon(TextureSquarePaths, "TextureSquare") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TextureSquare;
