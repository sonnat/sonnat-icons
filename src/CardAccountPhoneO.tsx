/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CardAccountPhoneOPaths from "./paths/CardAccountPhoneO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CardAccountPhoneO = createSvgIcon(CardAccountPhoneOPaths, "CardAccountPhoneO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CardAccountPhoneO;
