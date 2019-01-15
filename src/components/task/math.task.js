import $ from 'jquery';

export default function () {
  const contentElBody = document.querySelector('#demoModal .modal-body p b');
  const firstVar = Math.floor(Math.random() * 50);
  const secondVar = Math.floor(Math.random() * 50);
  let operation;
  let answer;
  if (Math.random() > 0.5) {
    operation = '+';
    answer = firstVar + secondVar;
  } else {
    operation = '-';
    answer = firstVar - secondVar;
  }
  const expression = firstVar + operation + secondVar;
  contentElBody.innerHTML = expression;

  return new Promise((resolve) => {
    $('#demoModal').on('hidden.bs.modal', () => {
      resolve(answer === Number($('.js-task-answer').val()));
    });
  });
}
