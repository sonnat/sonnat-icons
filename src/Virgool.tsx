/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import VirgoolPaths from "./paths/Virgool";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Virgool = createSvgIcon(VirgoolPaths, "Virgool") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Virgool;
