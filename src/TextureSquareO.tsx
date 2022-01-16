/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TextureSquareOPaths from "./paths/TextureSquareO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TextureSquareO = createSvgIcon(TextureSquareOPaths, "TextureSquareO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TextureSquareO;
