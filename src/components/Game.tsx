import { Game } from 'phaser';
import { useLayoutEffect } from 'react';

import { config } from '../game/config';
import Menu from './Menu';
import MessageBox from './MessageBox';

const gameContainerId = 'game-container';

export default function PhaserGame() {
  useLayoutEffect(() => {
    const game = new Game({ ...config, parent: gameContainerId });
    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div id={gameContainerId}>
      <Menu />
      <MessageBox />
    </div>
  );
}
