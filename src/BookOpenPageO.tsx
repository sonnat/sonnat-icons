/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BookOpenPageOPaths from "./paths/BookOpenPageO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BookOpenPageO = createSvgIcon(BookOpenPageOPaths, "BookOpenPageO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BookOpenPageO;
