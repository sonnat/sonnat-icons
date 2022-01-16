/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MessageProcessingOPaths from "./paths/MessageProcessingO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MessageProcessingO = createSvgIcon(MessageProcessingOPaths, "MessageProcessingO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MessageProcessingO;
