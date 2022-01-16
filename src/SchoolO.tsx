/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SchoolOPaths from "./paths/SchoolO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SchoolO = createSvgIcon(SchoolOPaths, "SchoolO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SchoolO;
