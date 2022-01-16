/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SendPaths from "./paths/Send";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Send = createSvgIcon(SendPaths, "Send") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Send;
