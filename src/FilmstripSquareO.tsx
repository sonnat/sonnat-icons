/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FilmstripSquareOPaths from "./paths/FilmstripSquareO";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const FilmstripSquareO = createSvgIcon(FilmstripSquareOPaths, "FilmstripSquareO") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default FilmstripSquareO;
