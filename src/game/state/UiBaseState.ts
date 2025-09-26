import Main from '../scenes/Main';
import { Player } from '../sprites';
import { UiFsm } from './UiFsm';

export default abstract class UiBaseState {
  scene: Main;
  player: Player;
  stateMachine: UiFsm | null;

  constructor(scene: Main, player: Player) {
    this.scene = scene;
    this.player = player;
    this.stateMachine = null;
  }

  abstract enter(): UiBaseState;

  abstract execute(): UiBaseState;
}
