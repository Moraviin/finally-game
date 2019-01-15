import $ from 'jquery';
import getWord from './dictinary';


export default function () {
  const contentElBody = document.querySelector('#demoModal .modal-body p');
  const text = 'Translate to russian word';
  const word = getWord(); // {word: "***", trans: Array(1)}}
  contentElBody.innerHTML = `${text}<br>${word.word}`;

  return new Promise((resolve) => {
    $('#demoModal').on('hidden.bs.modal', () => {
      let answer = $('.js-task-answer').val();
      if (typeof answer === 'string') {
        answer = answer.toLowerCase();
      }
      resolve(word.trans.some(el => el === answer));
    });
  });
}
