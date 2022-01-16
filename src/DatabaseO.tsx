/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DatabaseOPaths from "./paths/DatabaseO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DatabaseO = createSvgIcon(DatabaseOPaths, "DatabaseO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DatabaseO;
