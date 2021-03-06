import $ from 'jquery';

import template from './battle.template';

class Battle {
  static draw(gameState) {
    const contentEl = document.querySelector('#content');
    contentEl.innerHTML = template;
    $('#player .js-name').text(gameState.playerName);
  }

  static empty() {
    $('#battle').empty();
  }

  constructor() {
    this.player = {
      view: {
        color: 'red',
      },
    };
    this.monster = {
      view: {
        color: 'orange',
      },
    };
    this.currentState = {};
  }

  static setHp(unit, dmg) {
    if (unit === 'hero') {
      $('.hero-hp .progress-bar').css('width', `${dmg}%`);
    } else if (unit === 'monster') {
      $('.monster-hp .progress-bar').css('width', `${dmg}%`);
    }
  }
}

export default Battle;
