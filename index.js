const quiz = [
    {
        question: '第一問　僕の趣味はなんでしょう？',
        answers: [
            '筋トレ',
            'ゲーム',
            '水泳',
            'カラオケ'
        ],
        correct: '筋トレ'
    }, {
        question: '第二問　僕の好きな色はなんでしょう？',
        answers: [
            '赤色',
            '青色',
            '紫色',
            '黄色'
        ],
        correct: '紫色'
    }, {
        question: '第三問　僕の好きな食べ物はなんでしょう？',
        answers: [
            '餃子',
            'アイス',
            'とんこつラーメン',
            'お寿司'
        ],
        correct: 'お寿司'
    }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文と選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();



// ボタンをクリックしたら生後判定

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    }else{
        window.alert('残念、不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert('終了！あなたのせい回数は' + score + '/' + quizIndex + '問です！')
    }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) =>{
        clickHandler(e);
    });
    handlerIndex++;
}

