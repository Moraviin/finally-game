import $ from 'jquery';

import template from './score.template';

class Score {
  static draw() {
    const contentEl = document.querySelector('#content');
    contentEl.innerHTML = template;
  }

  static createLine(gameState) {
    $('table tr:nth-child(2)').replaceWith(`
    <tr>
    <td>1</td>
    <td>${gameState.playerName}</td>
    <td>${gameState.score}</td>
    </tr>`);
  }

  static empty() {
    $('#score').empty();
  }

}

export default Score;
