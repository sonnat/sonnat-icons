/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CardTextOPaths from "./paths/CardTextO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CardTextO = createSvgIcon(CardTextOPaths, "CardTextO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CardTextO;
