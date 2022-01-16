/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BarbecuePaths from "./paths/Barbecue";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Barbecue = createSvgIcon(BarbecuePaths, "Barbecue") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Barbecue;
