/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ApplicationExportPaths from "./paths/ApplicationExport";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ApplicationExport = createSvgIcon(ApplicationExportPaths, "ApplicationExport") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ApplicationExport;
