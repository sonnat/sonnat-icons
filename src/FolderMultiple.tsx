/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FolderMultiplePaths from "./paths/FolderMultiple";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FolderMultiple = createSvgIcon(FolderMultiplePaths, "FolderMultiple") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FolderMultiple;
