/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import HomePaths from "./paths/Home";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Home = createSvgIcon(HomePaths, "Home") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Home;
