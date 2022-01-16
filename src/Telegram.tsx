/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TelegramPaths from "./paths/Telegram";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Telegram = createSvgIcon(TelegramPaths, "Telegram") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Telegram;
