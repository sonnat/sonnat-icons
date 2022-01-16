/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import WheelchairPersonPaths from "./paths/WheelchairPerson";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const WheelchairPerson = createSvgIcon(WheelchairPersonPaths, "WheelchairPerson") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default WheelchairPerson;
