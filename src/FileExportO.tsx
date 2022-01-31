/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FileExportOPaths from "./paths/FileExportO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FileExportO = createSvgIcon(FileExportOPaths, "FileExportO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FileExportO;
