/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ChatOPaths from "./paths/ChatO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ChatO = createSvgIcon(ChatOPaths, "ChatO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ChatO;
