const topContainer = document.querySelector('.top'),
    bottom = document.querySelector('.bottom'),
    container = document.querySelector('.container'),
    inputNum = document.querySelector('.number'),
    form = document.querySelector('.form'),
    img = document.querySelector('.img'),
    errorMessage = document.querySelector('.message'),
    reloadBtn = document.querySelector('#reload'),
    win = './images/win.png',
    lose = './images/game-over.png';
let chances = 4;

play();

function play() {
    let num = Math.floor((Math.random() * 10) + 1);
    console.log(num);
    form.addEventListener('submit', function (e) {
        if (chances > 1) {
            if (parseInt(inputNum.value) === num) {
                result(win);
            } else {
                errorMessage.classList = 'error';
                errorMessage.textContent = `You have ${chances - 1} guesses left`;
                inputNum.value = '';
            }
        } else {
            result(lose);
        }
        chances--;
        e.preventDefault();
    }
    );
}

function clearError() {
    inputNum.value = '';
    setTimeout(function () {
        errorMessage.style.display = 'none';
    }, 1000);
}

function result(url) {
    img.src = url;
    topContainer.style.display = 'none';
    bottom.style.display = 'none';
    if (url === win) {
        reloadBtn.textContent = 'Play Again';
        reloadBtn.classList.add('playAgain');
    } else {
        reloadBtn.textContent = 'Try Again';
        reloadBtn.classList.add('tryAgain');
    }
    img.style.display = 'block';
    reloadBtn.classList.remove('invisible');
    inputNum.value = '';
    reload();
}

function reload() {
    document.querySelector('.btn').addEventListener('click', function () {
        window.location.reload();
    });
}