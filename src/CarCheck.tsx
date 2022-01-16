/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CarCheckPaths from "./paths/CarCheck";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CarCheck = createSvgIcon(CarCheckPaths, "CarCheck") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CarCheck;
