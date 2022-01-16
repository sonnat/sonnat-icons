/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MelangePaths from "./paths/Melange";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Melange = createSvgIcon(MelangePaths, "Melange") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Melange;
