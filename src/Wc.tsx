/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WcPaths from "./paths/Wc";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Wc = createSvgIcon(WcPaths, "Wc") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Wc;
