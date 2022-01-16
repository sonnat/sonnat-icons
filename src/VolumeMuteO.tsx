/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VolumeMuteOPaths from "./paths/VolumeMuteO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const VolumeMuteO = createSvgIcon(VolumeMuteOPaths, "VolumeMuteO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default VolumeMuteO;
