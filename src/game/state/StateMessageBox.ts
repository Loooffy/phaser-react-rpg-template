import { useUiStore } from '../../store/uiState';
import UiBaseState from './UiBaseState';
import { UiStateType } from './UiFsm';

export class StateMessageBox extends UiBaseState {
  enter(): UiBaseState {
    useUiStore.setState({ showMessageBox: true });
    useUiStore.setState({ showMenu: false });

    this.scene.input.keyboard!.off('keyup-ESC');
    this.scene.input.keyboard!.off('keyup-SPACE');
    return this;
  }

  execute(): UiBaseState {
    this.scene.input.keyboard!.once('keyup-ESC', () => {
      this.stateMachine!.foward(UiStateType.Menu);
    });

    this.scene.input.keyboard!.once('keyup-SPACE', () => {
      this.stateMachine!.backward();
    });
    return this;
  }
}
