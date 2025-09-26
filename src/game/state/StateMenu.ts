import { useUiStore } from '../../store/uiState';
import UiBaseState from './UiBaseState';

export class StateMenu extends UiBaseState {
  enter(): UiBaseState {
    useUiStore.setState({ showMenu: true });
    this.scene.input.keyboard!.off('keyup-SPACE');
    return this;
  }

  execute(): UiBaseState {
    this.scene.input.keyboard!.once('keyup-ESC', () => {
      this.stateMachine!.backward();
    });
    return this;
  }
}
