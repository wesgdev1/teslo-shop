import { create } from "zustand";

interface state {
  isSideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useUiStore = create<state>()((set) => ({
  isSideMenuOpen: false,
  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}));
