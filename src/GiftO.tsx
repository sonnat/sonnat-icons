/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import GiftOPaths from "./paths/GiftO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const GiftO = createSvgIcon(GiftOPaths, "GiftO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default GiftO;
