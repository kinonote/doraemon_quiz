const question = 'ドラえもんが２０世紀に来て、初めて食べた食べ物は何？';
const answers = [
  '栗まんじゅう',
  'お餅',
  'どら焼き',
  '焼き芋'
];
const correct = 'お餅';
const $button = document.getElementsByTagName('button');
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;

  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
//関数を呼び出し
setupQuiz();

//ボタンをクリックしたら正誤判定
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  if (correct === $button[0].textContent) {
    alert('正解！');
  } else {
    alert('不正解！');
  }
});

document.getElementsByTagName('button')[1].addEventListener('click', () => {
  if (correct === $button[1].textContent) {
    alert('正解！');
  } else {
    alert('不正解！');
  }
});

document.getElementsByTagName('button')[2].addEventListener('click', () => {
  if (correct === $button[2].textContent) {
    alert('正解！');
  } else {
    alert('不正解！');
  }
});

document.getElementsByTagName('button')[3].addEventListener('click', () => {
  if (correct === $button[3].textContent) {
    alert('正解！');
  } else {
    alert('不正解！');
  }
});