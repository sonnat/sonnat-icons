/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import NightPaths from "./paths/Night";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Night = createSvgIcon(NightPaths, "Night") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Night;
