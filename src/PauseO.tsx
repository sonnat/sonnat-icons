/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import PauseOPaths from "./paths/PauseO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const PauseO = createSvgIcon(PauseOPaths, "PauseO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default PauseO;
