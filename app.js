const question = 'ドラえもんが２０世紀に来て、初めて食べた食べ物は何？';
const answers = [
  '栗まんじゅう',
  'お餅',
  'どら焼き',
  '焼き芋'
];
const correct = 'お餅';

//定数の文字列をHTMLに反映させる
document.getElementById('js-question').textContent = question;
document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];
//ボタンをクリックしたら正誤判定
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  if (correct === document.getElementsByTagName('button')[0].textContent) {
    alert('正解！');
  } else {
    alert('不正解！');
  }
});