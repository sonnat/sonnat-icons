/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FolderPaths from "./paths/Folder";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Folder = createSvgIcon(FolderPaths, "Folder") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Folder;
