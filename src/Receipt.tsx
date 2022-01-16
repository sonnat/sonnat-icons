/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ReceiptPaths from "./paths/Receipt";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Receipt = createSvgIcon(ReceiptPaths, "Receipt") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Receipt;
