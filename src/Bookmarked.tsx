/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BookmarkedPaths from "./paths/Bookmarked";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Bookmarked = createSvgIcon(BookmarkedPaths, "Bookmarked") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Bookmarked;
