const question = 'ドラえもんが２０世紀に来て、初めて食べた食べ物は何？';
const answers = [
  '栗まんじゅう',
  'お餅',
  'どら焼き',
  '焼き芋'
];
const correct = 'お餅';
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;

  let buttonIndex = 0;
  
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
//関数を呼び出し
setupQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
};
//ボタンをクリックしたら正誤判定
let handleIndex = 0;

while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
  clickHandler(e);
});
  handleIndex++;
}

// $button[0].addEventListener('click', (e) => {
//   clickHandler(e);
// });

// $button [1].addEventListener('click', (e) => {
//   clickHandler(e);
// });

// $button [2].addEventListener('click', (e) => {
//   clickHandler(e);
// });

// $button [3].addEventListener('click', (e) => {
//   clickHandler(e);
// });