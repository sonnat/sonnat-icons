/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import BookOpenTextOPaths from "./paths/BookOpenTextO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const BookOpenTextO = createSvgIcon(BookOpenTextOPaths, "BookOpenTextO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default BookOpenTextO;
