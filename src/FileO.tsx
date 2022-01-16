/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FileOPaths from "./paths/FileO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FileO = createSvgIcon(FileOPaths, "FileO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FileO;
