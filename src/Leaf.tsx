/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import LeafPaths from "./paths/Leaf";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Leaf = createSvgIcon(LeafPaths, "Leaf") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Leaf;
