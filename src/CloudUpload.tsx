/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CloudUploadPaths from "./paths/CloudUpload";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CloudUpload = createSvgIcon(CloudUploadPaths, "CloudUpload") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CloudUpload;
