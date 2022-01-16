/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChatPaths from "./paths/Chat";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Chat = createSvgIcon(ChatPaths, "Chat") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Chat;
