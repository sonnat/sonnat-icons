/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TextSquareOPaths from "./paths/TextSquareO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TextSquareO = createSvgIcon(TextSquareOPaths, "TextSquareO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TextSquareO;
