/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FileMultipleOPaths from "./paths/FileMultipleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FileMultipleO = createSvgIcon(FileMultipleOPaths, "FileMultipleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FileMultipleO;
