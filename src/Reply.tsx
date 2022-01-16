/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ReplyPaths from "./paths/Reply";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Reply = createSvgIcon(ReplyPaths, "Reply") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Reply;
