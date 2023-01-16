import { detect } from "detect-browser"

export const broswerType = detect();
export const isSafari = broswerType?.name == "safari";
