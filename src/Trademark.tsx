/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import TrademarkPaths from "./paths/Trademark";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Trademark = createSvgIcon(TrademarkPaths, "Trademark") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Trademark;
