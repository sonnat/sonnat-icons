/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FacebookTypePaths from "./paths/FacebookType";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FacebookType = createSvgIcon(FacebookTypePaths, "FacebookType") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FacebookType;
