/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import AirplanePaths from "./paths/Airplane";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Airplane = createSvgIcon(AirplanePaths, "Airplane") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Airplane;
