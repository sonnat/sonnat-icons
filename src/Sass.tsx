/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SassPaths from "./paths/Sass";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Sass = createSvgIcon(SassPaths, "Sass") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Sass;
