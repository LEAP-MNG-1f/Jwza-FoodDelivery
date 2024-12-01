import { createContext } from "react";
import { TMenuContext } from "../ui/Types";

const MenuContext = createContext<TMenuContext | undefined>(undefined);

type MenuProvider = {
  children: React.ReactNode;
};
