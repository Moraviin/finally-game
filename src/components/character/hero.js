/* eslint-disable no-param-reassign */
import knightIdle from '../../img/knight_idle.png';
import knightAttack from '../../img/knight_attack.png';
import knightDie from '../../img/knight_die.png';
import golem from '../../img/g_idle1.png';
import golemAttack from '../../img/g_attack1.png';
import golemDie from '../../img/g_die1.png';
import golem2 from '../../img/g_idle2.png';
import golemAttack2 from '../../img/g_attack2.png';
import golemDie2 from '../../img/g_die2.png';

class Hero {
  constructor(unit) {
    this.hp = 100;
    if (unit === 'knight') {
      this.idle = Hero.loadImage(knightIdle, 1);
      this.attack = Hero.loadImage(knightAttack, 1);
      this.die = Hero.loadImage(knightDie, 1);
      this.context = document.getElementById('player-animation').getContext('2d');
    } else if (unit === 'monster' && Math.random() > 0.5) {
      this.idle = Hero.loadImage(golem, 2);
      this.attack = Hero.loadImage(golemAttack, 2);
      this.die = Hero.loadImage(golemDie, 2);
      this.context = document.getElementById('monster-animation').getContext('2d');
      this.createName();
    } else {
      this.idle = Hero.loadImage(golem2, 2);
      this.attack = Hero.loadImage(golemAttack2, 2);
      this.die = Hero.loadImage(golemDie2, 2);
      this.context = document.getElementById('monster-animation').getContext('2d');
      this.createName();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  static loadImage(path, scale) {
    const image = document.createElement('img');
    const unit = {
      dom: image,
      scale,
      frames: 7,
      ready: false,
      frame: 1,
    };
    if (!(scale >= 0)) {
      unit.scale = 1;
    }
    image.onload = () => {
      image.style = 'display:none';
      unit.ready = true;
    };
    image.src = path;
    return unit;
  }

  drawIdle() {
    this.idle.action = setInterval(() => {
      this.drawImage(this.idle);
    }, 100);
  }

  drawAttack() {
    clearInterval(this.idle.action);
    this.context.clearRect(0, 0, 3000, 3000);
    this.drawImage(this.attack);
    this.attack.action = setInterval(() => {
      this.drawImage(this.attack);
      // i++;
    }, 100);

    setTimeout(() => {
      clearInterval(this.attack.action);
      this.idle.action = setInterval(() => {
        this.drawImage(this.idle);
      }, 100);
    }, 700);
  }

  drawDie() {
    clearInterval(this.idle.action);
    this.context.clearRect(0, 0, 3000, 3000);
    this.drawImage(this.die);
    this.die.action = setInterval(() => {
      this.drawImage(this.die);
      // i++;
    }, 100);

    setTimeout(() => {
      clearInterval(this.die.action);
    }, 700);
  }

  drawImage(unit) {
    this.context.clearRect(0, 0, 3000, 3000);
    this.context.drawImage(
      unit.dom,
      unit.frame * 1700,
      0,
      1700,
      1100,
      0,
      0,
      unit.scale * 170,
      unit.scale * 110,
    );
    // image, source x,source y,source Width, source Height, dx, dy, dWidth, dHeight
    if (unit.frame >= unit.frames) {
      unit.frame = 0;
    } else {
      unit.frame += 1;
    }
  }

  createName() {
    const adjective = [
      'Токсичный',
      'Культурный',
      'Ленивый',
      'Угрюмый',
      'Зловонный',
    ];
    const prename = [
      ' Гоблин',
      ' Троль',
      ' Раздолбай',
      ' Мертвец',
      ' Поросёнок',
    ];
    const firstname = [' Алёша', ' Олег', ' Гулдан', ' Женёк', ' Святослав'];
    this.name = adjective[Math.floor(Math.random() / 0.2)]
      + prename[Math.floor(Math.random() / 0.2)]
      + firstname[Math.floor(Math.random() / 0.2)];
  }

  getDamage(dmg = 20) {
    this.hp -= dmg;
    return this.hp;
  }
}

export default Hero;
