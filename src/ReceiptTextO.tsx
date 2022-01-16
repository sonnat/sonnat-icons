/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ReceiptTextOPaths from "./paths/ReceiptTextO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const ReceiptTextO = createSvgIcon(ReceiptTextOPaths, "ReceiptTextO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default ReceiptTextO;
