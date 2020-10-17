
const quiz = [
  {
    question: 'ドラえもんが２０世紀に来て、初めて食べた食べ物は何？',
    answers: [
      '栗まんじゅう',
      'お餅',
      'どら焼き',
      '焼き芋'
    ],
    correct:'お餅'
  },  {
    question: 'のび太が初めて使ったドラえもんの道具は何？',
    answers: [
      'どこでもドア',
      'タケコプター',
      'タイムマシン',
      'ヘリトンボ'
    ],
    correct:'ヘリトンボ'
  },  {
    question: 'ドラえもんの座高は？',
    answers: [
      '129.3cm',
      '90cm',
      '100cm',
      '110cm'
    ],
    correct:'100cm'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;

// const question = 'ドラえもんが２０世紀に来て、初めて食べた食べ物は何？';
// const answers = [
//   '栗まんじゅう',
//   'お餅',
//   'どら焼き',
//   '焼き芋'
// ];
// const correct = 'お餅';
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
//関数を呼び出し
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
  } else {
    window.alert('不正解！');
  }
  quizIndex++;
  if (quizIndex<quizLength) { 
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！');
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

