import { Types } from 'phaser';

import { useUiStore } from '../../store/uiState';
import UiBaseState from './UiBaseState';
import { UiStateType } from './UiFsm';

type ArcadeColliderType = Types.Physics.Arcade.ArcadeColliderType;

export class StatePlay extends UiBaseState {
  enter(): UiBaseState {
    useUiStore.setState({ showMenu: false });
    useUiStore.setState({ showMessageBox: false });

    this.scene.input.keyboard!.off('keyup-SPACE');
    this.scene.input.keyboard!.off('keyup-ESC');

    return this;
  }

  execute(): UiBaseState {
    this.scene.input.keyboard!.on('keyup-SPACE', () => {
      const overlapping = this.scene.physics.overlap(
        this.player.selector as unknown as ArcadeColliderType,
        this.scene.getSign() as unknown as ArcadeColliderType,
      );
      if (overlapping) {
        this.stateMachine!.foward(UiStateType.MessageBox);
      }
    });

    this.scene.input.keyboard!.once('keyup-ESC', () => {
      this.stateMachine!.foward(UiStateType.Menu);
    });

    return this;
  }
}
