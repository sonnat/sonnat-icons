/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DatabaseExportOPaths from "./paths/DatabaseExportO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DatabaseExportO = createSvgIcon(DatabaseExportOPaths, "DatabaseExportO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DatabaseExportO;
