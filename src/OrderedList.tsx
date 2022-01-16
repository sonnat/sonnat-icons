/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import OrderedListPaths from "./paths/OrderedList";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const OrderedList = createSvgIcon(OrderedListPaths, "OrderedList") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default OrderedList;
