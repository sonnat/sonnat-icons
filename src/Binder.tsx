/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BinderPaths from "./paths/Binder";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Binder = createSvgIcon(BinderPaths, "Binder") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Binder;
