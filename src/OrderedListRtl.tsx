/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import OrderedListRtlPaths from "./paths/OrderedListRtl";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const OrderedListRtl = createSvgIcon(OrderedListRtlPaths, "OrderedListRtl") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default OrderedListRtl;
