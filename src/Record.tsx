/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import RecordPaths from "./paths/Record";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Record = createSvgIcon(RecordPaths, "Record") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Record;
