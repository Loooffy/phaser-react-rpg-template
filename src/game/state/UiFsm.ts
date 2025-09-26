import { useUiStore } from '../../store/uiState';
import Main from '../scenes/Main';
import { Player } from '../sprites';
import { StateMenu, StateMessageBox, StatePlay } from './';
import State from './UiBaseState';

export enum UiStateType {
  MessageBox = 'MessageBox',
  Menu = 'Menu',
  Play = 'Play',
}

export class UiFsm {
  initialState: UiStateType;
  possibleStates: Record<UiStateType, State>;

  constructor(
    initialState: UiStateType,
    possibleStates: Record<UiStateType, State>,
  ) {
    this.initialState = initialState;
    this.possibleStates = possibleStates;
    for (const state of Object.values(this.possibleStates)) {
      state.stateMachine = this;
    }
  }

  init() {
    if (useUiStore.getState().uiState.length === 0) {
      useUiStore.setState({ uiFsm: this });
      useUiStore.getState().pushUiState(this.initialState);
      this.transition(this.initialState);
    }
  }

  transition(lastState: UiStateType): void {
    this.possibleStates[lastState].enter().execute();
  }

  foward(newState: UiStateType): UiFsm {
    useUiStore.getState().pushUiState(newState);
    this.transition(newState);
    return this;
  }

  backward(): UiFsm {
    useUiStore.getState().popUiState();
    this.transition(useUiStore.getState().getLastState() as UiStateType);
    return this;
  }
}

export const getUiFsm = (scene: Main, player: Player): UiFsm => {
  return new UiFsm(UiStateType.Play, {
    [UiStateType.MessageBox]: new StateMessageBox(scene, player),
    [UiStateType.Menu]: new StateMenu(scene, player),
    [UiStateType.Play]: new StatePlay(scene, player),
  });
};
