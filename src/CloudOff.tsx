/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CloudOffPaths from "./paths/CloudOff";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CloudOff = createSvgIcon(CloudOffPaths, "CloudOff") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CloudOff;
