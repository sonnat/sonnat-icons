/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import DropBoltOPaths from "./paths/DropBoltO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const DropBoltO = createSvgIcon(DropBoltOPaths, "DropBoltO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default DropBoltO;
