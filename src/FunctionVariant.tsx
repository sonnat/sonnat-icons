/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FunctionVariantPaths from "./paths/FunctionVariant";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FunctionVariant = createSvgIcon(FunctionVariantPaths, "FunctionVariant") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FunctionVariant;
