/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CloudPaths from "./paths/Cloud";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Cloud = createSvgIcon(CloudPaths, "Cloud") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Cloud;
