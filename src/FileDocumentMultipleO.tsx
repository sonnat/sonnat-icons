/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FileDocumentMultipleOPaths from "./paths/FileDocumentMultipleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FileDocumentMultipleO = createSvgIcon(FileDocumentMultipleOPaths, "FileDocumentMultipleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FileDocumentMultipleO;
