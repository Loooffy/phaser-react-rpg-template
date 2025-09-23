import { Game } from 'phaser';
import { useLayoutEffect } from 'react';

import { config } from './game/config';

const gameContainerId = 'game-container';

export default function PhaserGame() {
  useLayoutEffect(() => {
    const game = new Game({ ...config, parent: gameContainerId });
    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id={gameContainerId}></div>;
}
