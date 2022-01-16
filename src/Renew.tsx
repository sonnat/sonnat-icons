/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import RenewPaths from "./paths/Renew";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Renew = createSvgIcon(RenewPaths, "Renew") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Renew;
