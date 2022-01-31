/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FolderOPaths from "./paths/FolderO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FolderO = createSvgIcon(FolderOPaths, "FolderO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FolderO;
