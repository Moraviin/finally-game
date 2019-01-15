import $ from 'jquery';

import template from './task.template';
import math from './math.task';
import equal from './equal.task';
import translate from './translate';

class Task {
  static draw(task) {
    const contentElHead = document.querySelector('#demoModal .modal-header');
    contentElHead.innerHTML = task;
    const contentElBody = document.querySelector('#demoModal .modal-body');
    contentElBody.innerHTML = template;
    $('#demoModal').modal({});
  }

  static empty() {
    $('#cast').empty();
  }

  static getPlayerAnswer(task) {
    let answer;
    switch (task) {
      case 'Math':
        Task.draw(task);
        answer = math();
        break;
      case 'Vocabulary':
        Task.draw(task);
        answer = translate();
        break;
      case 'Comparation':
        Task.draw(task);
        answer = equal();
        break;
      default:
        break;
    }
    return answer;
  }
}

export default Task;
