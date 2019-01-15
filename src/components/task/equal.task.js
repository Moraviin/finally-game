import $ from 'jquery';

export default function () {
  const contentElBody = document.querySelector('#demoModal .modal-body section');
  const firstVar = Math.floor(Math.random() * 50);
  const secondVar = Math.floor(Math.random() * 50);
  contentElBody.innerHTML = `<p>
  ${firstVar} ___  ${secondVar}<br>
  Choose correct
  </p><br>
  <input type="radio" name="equal" value=">">&gt;<br>
  <input type="radio" name="equal" value="<">&lt;<br>
  <input type="radio" name="equal" value="==">=<br>
  `;

  return new Promise((resolve) => {
    $('#demoModal').on('hidden.bs.modal', () => {
      resolve(eval(firstVar + $('input[name=equal]:checked').val() + secondVar));
    });
  });
}
