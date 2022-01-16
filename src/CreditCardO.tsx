/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CreditCardOPaths from "./paths/CreditCardO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CreditCardO = createSvgIcon(CreditCardOPaths, "CreditCardO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CreditCardO;
