/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import StorePaths from "./paths/Store";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Store = createSvgIcon(StorePaths, "Store") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Store;
