/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import GiftPaths from "./paths/Gift";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Gift = createSvgIcon(GiftPaths, "Gift") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Gift;
