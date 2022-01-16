/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ReplyOPaths from "./paths/ReplyO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ReplyO = createSvgIcon(ReplyOPaths, "ReplyO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ReplyO;
