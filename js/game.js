'use strics'

const WALL = '🧱'
const FOOD = '.'
const EMPTY = ' '

var gBorad;
var gGame = {
    score: 0,
    isOn: false
}

function init(){
    gBorad = buildBoard()
    createPacman(gBorad)
    createGhosts(gBorad)
    printMat(gBorad, '.board-container')
    console.table(gBorad)
    gGame.isOn = true
}

function buildBoard() {
    var size = 10
    var board = []

    for (var i=0; i<size; i++) {
     board[i]=[]
         for (var j=0; j<size; j++) {
         board[i][j] = FOOD
         if (i === 0 || i === size-1 || j === 0 || j=== size-1) {
            board[i][j] = WALL
         }
        }
    }
 return board;
} 

function updateScore(diff) {
    gGame.score += diff
    document.querySelector('h2 span').innerText = gGame.score;
}

function gameOver() {
    console.log('Game Over')
    gGame.isOn = false;
    clearInterval(gIntervalGhosts)
    gBorad[gPacman.location.i][gPacman.location.j] = EMPTY
    renderCell(gPacman.location , EMPTY)
    alert("Game Over!")
}

