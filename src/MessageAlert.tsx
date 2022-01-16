/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MessageAlertPaths from "./paths/MessageAlert";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const MessageAlert = createSvgIcon(MessageAlertPaths, "MessageAlert") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default MessageAlert;
