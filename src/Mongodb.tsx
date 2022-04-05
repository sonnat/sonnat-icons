/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import MongodbPaths from "./paths/Mongodb";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Mongodb = createSvgIcon(MongodbPaths, "Mongodb") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Mongodb;
