/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FileDocumentMultiplePaths from "./paths/FileDocumentMultiple";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FileDocumentMultiple = createSvgIcon(FileDocumentMultiplePaths, "FileDocumentMultiple") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FileDocumentMultiple;
