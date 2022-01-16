/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DatabasePaths from "./paths/Database";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Database = createSvgIcon(DatabasePaths, "Database") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Database;
