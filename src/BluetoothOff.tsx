/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BluetoothOffPaths from "./paths/BluetoothOff";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BluetoothOff = createSvgIcon(BluetoothOffPaths, "BluetoothOff") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BluetoothOff;
