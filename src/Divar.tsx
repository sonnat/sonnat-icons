/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DivarPaths from "./paths/Divar";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Divar = createSvgIcon(DivarPaths, "Divar") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Divar;
