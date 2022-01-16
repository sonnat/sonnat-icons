/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import UnorderedListPaths from "./paths/UnorderedList";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const UnorderedList = createSvgIcon(UnorderedListPaths, "UnorderedList") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default UnorderedList;
