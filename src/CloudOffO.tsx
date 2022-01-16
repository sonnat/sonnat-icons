/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CloudOffOPaths from "./paths/CloudOffO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CloudOffO = createSvgIcon(CloudOffOPaths, "CloudOffO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CloudOffO;
