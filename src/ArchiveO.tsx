/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ArchiveOPaths from "./paths/ArchiveO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ArchiveO = createSvgIcon(ArchiveOPaths, "ArchiveO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ArchiveO;
