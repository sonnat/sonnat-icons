/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CardAccountPhonePaths from "./paths/CardAccountPhone";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CardAccountPhone = createSvgIcon(CardAccountPhonePaths, "CardAccountPhone") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CardAccountPhone;
