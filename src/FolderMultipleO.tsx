/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FolderMultipleOPaths from "./paths/FolderMultipleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FolderMultipleO = createSvgIcon(FolderMultipleOPaths, "FolderMultipleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FolderMultipleO;
