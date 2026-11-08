import { createContext } from "react";
import type { Size, Variant } from "./Button";

export const ActionGroupContext = createContext<{ variant?: Variant; size?: Size; disabled?: boolean }>({});
