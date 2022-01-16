/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AparatPaths from "./paths/Aparat";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Aparat = createSvgIcon(AparatPaths, "Aparat") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Aparat;
