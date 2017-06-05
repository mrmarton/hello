
// alert bar
const alBar = document.getElementById('alertBar');

alBar.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    alertBar.style.opacity = '0';
  }
});

// user message area
const messageArea = document.getElementById('message');
const messageText = document.getElementById('messageUser');
const search = document.getElementById('searchUser');
const send = document.getElementById('sendMessage');
const err = document.getElementById('error');
const succ = document.getElementById('success');

messageArea.addEventListener('click', (e) => {
  e.preventDefault();
});

send.addEventListener('click', () => {
  if (search.value == '' || messageText.value == '') {
    err.style.display = 'flex';
  } else {
    success.style.display = 'flex';
  }
  $('#error').delay(1000).fadeOut(500);
  $('#success').delay(1000).fadeOut(500);
});
