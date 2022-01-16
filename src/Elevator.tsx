/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import ElevatorPaths from "./paths/Elevator";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Elevator = createSvgIcon(ElevatorPaths, "Elevator") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Elevator;
