/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ExportPaths from "./paths/Export";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Export = createSvgIcon(ExportPaths, "Export") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Export;
