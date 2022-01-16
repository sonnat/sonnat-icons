/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CardTextPaths from "./paths/CardText";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CardText = createSvgIcon(CardTextPaths, "CardText") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CardText;
