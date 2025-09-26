import { create } from 'zustand';

import { UiFsm, UiStateType } from '../game/state/UiFsm';

export interface IUiState {
  uiState: UiStateType[];
  uiFsm: UiFsm | null;
  showMenu: boolean;
  showMessageBox: boolean;
  pushUiState: (state: UiStateType) => void;
  popUiState: () => void;
  getLastState: () => UiStateType;
  setUiFsm: (uiFsm: UiFsm) => void;
  setShowMenu: (showMenu: boolean) => void;
  setShowMessageBox: (showMessageBox: boolean) => void;
}

export const useUiStore = create<IUiState>((set, get) => ({
  uiState: [],
  uiFsm: null,
  showMenu: false,
  showMessageBox: false,
  pushUiState: (newState) =>
    set((state) => {
      state.uiState.push(newState);
      return state;
    }),
  popUiState: () =>
    set(({ uiState }) => {
      uiState.pop();
      return { uiState };
    }),
  getLastState: () => get().uiState.slice(-1)[0] as UiStateType,
  setShowMenu: (showMenu) => set({ showMenu }),
  setShowMessageBox: (showMessageBox) => set({ showMessageBox }),
  setUiFsm: (fsm) => set({ uiFsm: fsm }),
}));
