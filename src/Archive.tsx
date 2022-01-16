/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ArchivePaths from "./paths/Archive";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Archive = createSvgIcon(ArchivePaths, "Archive") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Archive;
