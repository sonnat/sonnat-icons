/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import GavelPaths from "./paths/Gavel";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Gavel = createSvgIcon(GavelPaths, "Gavel") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Gavel;
