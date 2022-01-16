/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CreditCardPaths from "./paths/CreditCard";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CreditCard = createSvgIcon(CreditCardPaths, "CreditCard") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CreditCard;
