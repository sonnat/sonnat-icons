/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-unresolved */
import FingerprintPaths from "./paths/Fingerprint";
// @ts-ignore
import createSvgIcon from "@sonnat/ui/utils/createSvgIcon";

const Fingerprint = createSvgIcon(FingerprintPaths, "Fingerprint") as ReturnType<
  import("./typings").CreateSvgIcon
>;

export default Fingerprint;
