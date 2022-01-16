/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import JacuzziPaths from "./paths/Jacuzzi";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Jacuzzi = createSvgIcon(JacuzziPaths, "Jacuzzi") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Jacuzzi;
