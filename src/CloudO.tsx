/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CloudOPaths from "./paths/CloudO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CloudO = createSvgIcon(CloudOPaths, "CloudO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CloudO;
