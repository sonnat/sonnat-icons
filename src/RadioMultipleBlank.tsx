/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import RadioMultipleBlankPaths from "./paths/RadioMultipleBlank";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const RadioMultipleBlank = createSvgIcon(RadioMultipleBlankPaths, "RadioMultipleBlank") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default RadioMultipleBlank;
