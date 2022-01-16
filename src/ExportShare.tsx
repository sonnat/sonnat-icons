/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ExportSharePaths from "./paths/ExportShare";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ExportShare = createSvgIcon(ExportSharePaths, "ExportShare") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ExportShare;
