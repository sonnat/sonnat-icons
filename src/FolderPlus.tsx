/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FolderPlusPaths from "./paths/FolderPlus";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FolderPlus = createSvgIcon(FolderPlusPaths, "FolderPlus") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FolderPlus;
