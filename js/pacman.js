'use strics'
const PACMAN = '😮'
var gPacman;

function createPacman(board) {
    gPacman = {
        location: {
            i:5,
            j:7
        },
        isSuper: false
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN
}

function movePacman(ev) {
    if (!gGame.isOn) return
    var nextLocation = getnextLocation(ev)
    var nextCell = gBorad[nextLocation.i][nextLocation.j]
        if (nextCell === WALL) return
        if (nextCell === GHOST) {
            gameOver();
        return
    }   
        if (nextCell === FOOD) {
            updateScore(1)
        }
    gBorad[gPacman.location.i][gPacman.location.j] = EMPTY
    renderCell(gPacman.location , EMPTY)
    gPacman.location = {
        i: nextLocation.i,
        j: nextLocation.j
    }
    gBorad[gPacman.location.i][gPacman.location.j] = PACMAN
    renderCell(gPacman.location, PACMAN)
}

function getnextLocation(keyboardEvent){
    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
     }; 
    
    switch (keyboardEvent.code) {
        case 'ArrowUp':
            nextLocation.i--
            break;
        case 'ArrowDown':
            nextLocation.i++
            break;
        case 'ArrowLeft':
            nextLocation.j--
            break;
        case 'ArrowRight':
            nextLocation.j++
            break;
        default: return null
    }
   return nextLocation;
}