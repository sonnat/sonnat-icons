/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MessageProcessingPaths from "./paths/MessageProcessing";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MessageProcessing = createSvgIcon(MessageProcessingPaths, "MessageProcessing") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MessageProcessing;
