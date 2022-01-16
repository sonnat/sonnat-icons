/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FilePaths from "./paths/File";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const File = createSvgIcon(FilePaths, "File") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default File;
