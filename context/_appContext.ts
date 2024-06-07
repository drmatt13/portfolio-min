import { createContext } from "react";

interface Modal {
  show: boolean;
  type: string;
}

const context = createContext({
  isMobile: false,
  setIsMobile: (value: boolean) => {},
  darkMode: false,
  setDarkMode: (value: boolean) => {},
  toggleDarkMode: () => {},
  modal: { show: false, type: "" } as Modal,
  setModal: (modal: Modal) => {},
});

export default context;
