/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import CafebazaarTypePaths from "./paths/CafebazaarType";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const CafebazaarType = createSvgIcon(CafebazaarTypePaths, "CafebazaarType") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default CafebazaarType;
