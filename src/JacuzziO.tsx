/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import JacuzziOPaths from "./paths/JacuzziO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const JacuzziO = createSvgIcon(JacuzziOPaths, "JacuzziO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default JacuzziO;
