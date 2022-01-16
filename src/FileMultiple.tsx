/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FileMultiplePaths from "./paths/FileMultiple";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FileMultiple = createSvgIcon(FileMultiplePaths, "FileMultiple") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FileMultiple;
