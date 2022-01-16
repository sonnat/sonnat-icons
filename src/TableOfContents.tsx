/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TableOfContentsPaths from "./paths/TableOfContents";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const TableOfContents = createSvgIcon(TableOfContentsPaths, "TableOfContents") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default TableOfContents;
