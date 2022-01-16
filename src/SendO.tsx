/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SendOPaths from "./paths/SendO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const SendO = createSvgIcon(SendOPaths, "SendO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default SendO;
