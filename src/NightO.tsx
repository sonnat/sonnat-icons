/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import NightOPaths from "./paths/NightO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const NightO = createSvgIcon(NightOPaths, "NightO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default NightO;
