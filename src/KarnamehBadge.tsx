/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import KarnamehBadgePaths from "./paths/KarnamehBadge";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const KarnamehBadge = createSvgIcon(KarnamehBadgePaths, "KarnamehBadge") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default KarnamehBadge;
