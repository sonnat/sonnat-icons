/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BoltOPaths from "./paths/BoltO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BoltO = createSvgIcon(BoltOPaths, "BoltO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BoltO;
