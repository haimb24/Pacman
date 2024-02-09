function printMat(mat, selector) {
    var strHTML = '<table border="0"><tbody>';
    for (var i=0 ; i<mat.length; i++){
        strHTML += '<tr>';
        for (var j=0; j<mat[0].length; j++){
            var cell = mat[i][j]
            var className = 'cell cell-' + i + '-' +j;
            strHTML += '<td class="' + className + '">' + cell + '</td>'
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>';
    var elcontainer = document.querySelector(selector)
    elcontainer.innerHTML = strHTML
}

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function renderCell(location, value) {
    var elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
    elCell.innerHTML = value;
}

