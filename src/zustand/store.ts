import { create } from 'zustand';

interface GameState {
  message: string | null;
  showMessageBox: boolean;
  setMessage: (message: string | null) => void;
  setShowMessageBox: (show: boolean) => void;
}

export const useGameStore = create<GameState>((set) => ({
  message: null,
  showMessageBox: false,
  setMessage: (message) => set({ message }),
  setShowMessageBox: (show) => set({ showMessageBox: show }),
}));
