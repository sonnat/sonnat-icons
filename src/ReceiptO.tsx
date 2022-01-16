/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ReceiptOPaths from "./paths/ReceiptO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ReceiptO = createSvgIcon(ReceiptOPaths, "ReceiptO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ReceiptO;
