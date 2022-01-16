/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CapsuleOPaths from "./paths/CapsuleO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CapsuleO = createSvgIcon(CapsuleOPaths, "CapsuleO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CapsuleO;
