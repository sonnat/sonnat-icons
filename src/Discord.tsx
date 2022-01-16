/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DiscordPaths from "./paths/Discord";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Discord = createSvgIcon(DiscordPaths, "Discord") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Discord;
