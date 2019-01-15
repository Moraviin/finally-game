import $ from 'jquery';

import template from './cast.template';


class Cast {
  static draw() {
    const contentEl = document.querySelector('#demoModal .modal-body');
    contentEl.innerHTML = template;

    $('#demoModal').modal({});
  }

  static empty() {
    $('#cast').empty();
  }

  static getPlayerCast() {
    Cast.draw();
    let currentCast = 'only_one_cast';
    $('.cast').on('click', async (e) => {
      currentCast = e.currentTarget.innerText;
      $('.btn-warning').removeClass('btn-warning').addClass('btn-primary');
      $(e.currentTarget).removeClass('btn-primary').addClass('btn-warning');
      // console.log(e);
    });

    return new Promise((resolve) => {
      $('#demoModal').on('hidden.bs.modal', () => {
        resolve(currentCast);
      });
    });
  }
}

export default Cast;
