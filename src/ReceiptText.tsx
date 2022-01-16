/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ReceiptTextPaths from "./paths/ReceiptText";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ReceiptText = createSvgIcon(ReceiptTextPaths, "ReceiptText") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ReceiptText;
