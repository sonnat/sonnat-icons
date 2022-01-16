/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import SnowflakePaths from "./paths/Snowflake";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Snowflake = createSvgIcon(SnowflakePaths, "Snowflake") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Snowflake;
