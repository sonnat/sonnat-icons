/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SaunaPaths from "./paths/Sauna";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Sauna = createSvgIcon(SaunaPaths, "Sauna") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Sauna;
