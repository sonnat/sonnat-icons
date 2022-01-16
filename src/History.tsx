/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HistoryPaths from "./paths/History";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const History = createSvgIcon(HistoryPaths, "History") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default History;
