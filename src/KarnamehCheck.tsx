/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import KarnamehCheckPaths from "./paths/KarnamehCheck";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const KarnamehCheck = createSvgIcon(KarnamehCheckPaths, "KarnamehCheck") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default KarnamehCheck;
