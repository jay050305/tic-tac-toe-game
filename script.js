// window.onbeforeunload = function() {
//     return "All the game progress will be lost";
// }

var cell = document.querySelectorAll('.cell'),
    winner = document.querySelector('.winner'),
    restartButton = document.querySelector('div.win-notification button'),
    winNotify = document.querySelector('.win-notification');

let counter = 0;

//function to decide winner
function checkingWin(a, b, c) {
    if (cell[a].dataset.input == cell[b].dataset.input
        && cell[a].dataset.input == cell[c].dataset.input
        && cell[b].dataset.input == cell[c].dataset.input
        && cell[a].dataset.input != ''
        && cell[b].dataset.input != ''
        && cell[c].dataset.input != ''
    ) {
        winNotify.style.transform = 'scale(1)';
        winNotify.style.display = 'flex';

        if (cell[a].dataset.input == 'round') {
            winner.append(round);
        }
        else {
            console.log('cross wins')
            winner.append(cross);
        }
    }
}

//creating elements of zero and cross
const round = document.createElement('div');
round.className = 'round';

const cross = document.createElement('div');
cross.className = 'cross';
cross.innerHTML =
    `<div class="cross-line"></div>
    <div class="cross-line"></div>`

for (let cells of cell) {

    //creating clicking effects of cell            
    cells.addEventListener('mousedown', function () {
        this.style.background = '#343A40';
    })
    cells.addEventListener('mouseup', function () {
        this.style.background = '#212529';
    })
    cells.addEventListener('mouseleave', function () {
        this.style.background = '#212529';
    })

    //making the zero and cross appear on click
    cells.addEventListener('mouseup', function (e) {
        if (this.children.length == 0) {

            if (counter % 2 == 0) {
                this.append(round.cloneNode(true))
                this.dataset.input = "round"

                counter++
            }
            else {
                this.append(cross.cloneNode(true))
                this.dataset.input = "cross"

                counter++
            }

        }
        checkingWin(0, 1, 2)
        checkingWin(3, 4, 5)
        checkingWin(6, 7, 8)
        checkingWin(0, 3, 6)
        checkingWin(1, 4, 7)
        checkingWin(2, 5, 8)
        checkingWin(0, 4, 8)
        checkingWin(2, 4, 6)
    })
}

restartButton.addEventListener('click', function(){
    location.reload();
})
