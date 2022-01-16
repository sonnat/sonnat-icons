/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FilmstripSquarePaths from "./paths/FilmstripSquare";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FilmstripSquare = createSvgIcon(FilmstripSquarePaths, "FilmstripSquare") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FilmstripSquare;
