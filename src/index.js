import 'regenerator-runtime/runtime';
import 'bootstrap';
import $ from 'jquery';

import { GameState, setGameState } from './game';

import Header from './components/header/header';
import Nav from './components/navigation/nav';

import './index.css';
import ModalDialog from './components/modal-dialog/modal-dialog';
import ChoosePlayerName from './screens/choosePlayerName/choosePlayerName';
import Battle from './screens/battle/battle';
import Score from './screens/score/score';
import Cast from './screens/cast/cast';
import Task from './components/task/task';
import Hero from './components/character/hero';

import { pause } from './utils';

const setPlayerName = async (gameState) => {
  const playerName = await ChoosePlayerName.getNewPlayerName();

  console.log('playerName', playerName); // eslint-disable-line no-console
  gameState.setPlayerName(playerName);
};


const getBattleResult = async (gameState) => {
  await setPlayerName(gameState);

  Battle.draw(gameState);

  const knight = new Hero('knight');
  knight.drawIdle();
  let monster = new Hero('monster');
  monster.drawIdle();
  $('#monster .js-enemy-name').text(monster.name);

  $('#js-choose-cast').on('click', async () => {
    const task = await Cast.getPlayerCast();
    const result = await Task.getPlayerAnswer(task);
    let hpLeft;
    if (result) {
      knight.drawAttack();
      hpLeft = monster.getDamage();
      Battle.setHp('monster', hpLeft);
    } else {
      monster.drawAttack();
      hpLeft = knight.getDamage();
      Battle.setHp('hero', hpLeft);
    }
    if (hpLeft <= 0 && result) {
      monster.drawDie();
      gameState.upScore();
      monster = new Hero('monster');
      Battle.setHp('monster', 100);
      monster.drawIdle();
    } else if (hpLeft <= 0) {
      knight.drawDie();
      Score.draw();
      Score.createLine(gameState);
    }
  });
};


const startApp = () => {
  window.$ = $; // for debug

  const gameState = new GameState();
  window.gameState = gameState; // antipatter - need use carefully!
  setGameState(gameState);

  Nav.draw();
  Header.draw();
  ModalDialog.draw();

  $('.js-start-game').on('click', async () => {
    await getBattleResult(gameState);
  });

  $('.js-landing').on('click', async () => {
    startApp();
  });

  $('.js-game-score').on('click', async () => {
    Score.draw();
  });
};

startApp();
