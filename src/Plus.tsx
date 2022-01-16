/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PlusPaths from "./paths/Plus";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Plus = createSvgIcon(PlusPaths, "Plus") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Plus;
