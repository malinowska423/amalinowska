const PUZZLE_DIFFICULTY = 4; /*plansza 4x4*/
const PUZZLE_HOVER_TINT = `#009900`; /*kolor tla puzzla doc.*/
let _canvas;
let _stage; /*kontekst 2D*/
let _img; /*załadowany obrazek*/
let _pieces; /*tablica współ. dla kawałków*/
let _puzzleWidth; /*szeroko´s´c układanki*/
let _puzzleHeight; /*wysoko´s´c układanki*/
let _pieceWidth; /*szeroko´s´c puzzla*/
let _pieceHeight; /*wysoko´s´c puzzla*/
let _currentPiece; /*aktualnie przeci ˛agany*/
let _currentDropPiece; /*puzzle na jaki upuszczamy*/
let _mouse; /*x,y - pozycja wska´znika myszy*/
let _puzzleCols = 4;
let _puzzleRows = 4;
let _maxPosition = _puzzleCols * _puzzleRows;
let _started = false;
let _imageUrl = '../img/puzzle/puzzle_7.jpg';

function initCanvas() {
    console.log('init canvas');
    _started = true;
    _img = new Image();
    _img.addEventListener('load', onImage);
    _img.src = _imageUrl;
}

function onImage() {
    console.log('OnImage');
    setCanvas();
    initPuzzle();
}

function setCanvas() {

    console.log('set canvas');
    _canvas = document.getElementById('canvas');
    _stage = _canvas.getContext('2d');
    _puzzleCols = document.getElementById('cols-input').value;
    _puzzleRows = document.getElementById('rows-input').value;
    _maxPosition = _puzzleRows * _puzzleCols;
    _canvas.width = _img.width;
    _canvas.height = _img.height;
    _puzzleWidth = _canvas.width;
    _puzzleHeight = _canvas.height;
    _pieceWidth = Math.floor(_puzzleWidth / _puzzleCols);
    _pieceHeight = Math.floor(_puzzleHeight / _puzzleRows);
}

function initPuzzle() { /*inicjalizacja pierwotna i na replay*/

    console.log('init puzzle');
    _pieces = [];
    _mouse = {x: 0, y: 0};
    _currentPiece = null; /*na wypadek replay*/
    _currentDropPiece = null; /*na wypadek replay*/
    _stage.drawImage(_img, 0, 0, _puzzleWidth, _puzzleHeight,
        0, 0, _puzzleWidth, _puzzleHeight);
    createTitle("Click to Start Puzzle");
    buildPieces();
}

function createTitle(msg) {

    console.log('create title');
    _stage.fillStyle = "#000000";
    _stage.globalAlpha = .4;
    _stage.fillRect(100, _puzzleHeight - 40, _puzzleWidth - 200, 40);
    _stage.fillStyle = "#FFFFFF";
    _stage.globalAlpha = 1; /*˙zeby tekst nie był przezr.*/
    _stage.textAlign = "center";
    _stage.textBaseline = "middle";
    _stage.font = "110% sans-serif";
    _stage.fillText(msg, _puzzleWidth / 2, _puzzleHeight - 20);
}

function buildPieces() {
    console.log('build pieces');
    let i;
    for (i = 0; i < _maxPosition - 1; i++) {
        _pieces.push({order: i, active: true});
    }
    _pieces.push({order: _maxPosition - 1, active: false});
    console.log(_pieces);
    document.getElementById('canvas').onmousedown = shufflePuzzle;
    // shufflePuzzle();
}


function shufflePuzzle() {
    console.log('shuffle puzzle');
    // do {
    _pieces = shuffleArray(_pieces);
    // } while (!isSolvable());
    // console.error( _pieces);
    // console.error(_pieces);
    _stage.clearRect(0, 0, _puzzleWidth, _puzzleHeight);
    let i;
    let piece;
    for (i = 0; i < _pieces.length; i++) {
        piece = _pieces[i];
        piece.pos = i;
        drawPuzzleBoard(piece);
    }
    document.onmousedown = onPuzzleClick;
}


function shuffleArray(a) {
    console.log('shuffle array');
    [a[0], a[_maxPosition - 1]] = [a[_maxPosition - 1], a[0]];
    for (let i = _maxPosition - 1; i > 1; i--) {
        let j;
        do {
            j = Math.floor(Math.random() * (i + 1));
        } while (j === 0);
        [a[i], a[j]] = [a[j], a[i]];
    }
    console.log(a);
    return a;
}


function drawPuzzleBoard(piece) {
    if (piece.active) {
        _stage.drawImage(_img, getPieceCol(piece.order) * _pieceWidth, getPieceRow(piece.order) * _pieceHeight,
            _pieceWidth, _pieceHeight, getPieceCol(piece.pos) * _pieceWidth, getPieceRow(piece.pos) * _pieceHeight, _pieceWidth, _pieceHeight);
    } else {
        _stage.fillStyle = '#FF0000';
        _stage.fillRect(getPieceCol(piece.pos) * _pieceWidth, getPieceRow(piece.pos) * _pieceHeight, _pieceWidth, _pieceHeight);
    }
}


function getPieceCol(position) {
    return position % _puzzleCols;
}

function getPieceRow(position) {
    return Math.floor(position / _puzzleCols);
}


function onPuzzleClick(e) {
    console.log("click");

    _mouse.x = e.pageX - _canvas.offsetLeft;
    _mouse.y = e.pageY - _canvas.offsetTop;
    if (_mouse.x === e.x || _mouse.y === e.y) {
        return;
    }
    console.log(_mouse);

    _currentPiece = checkPieceClicked();
    if (_currentPiece != null && _currentPiece.active) {
        let move = canMove(_currentPiece);  //available position
        if (move >= 0) {
            //can move piece
            let now = _currentPiece.pos;
            _pieces[move].pos = now;
            _currentPiece.pos = move;
            [_pieces[move], _pieces[now]] = [_pieces[now], _pieces[move]];
            resetPuzzleAndCheckWin();
        }
    }
}

function checkPieceClicked() {
    console.log('piece clicked');
    let i;
    let piece;
    for (i = 0; i < _pieces.length; i++) {
        piece = _pieces[i];
        let xPos = getPieceCol(piece.pos) * _pieceWidth;
        let yPos = getPieceRow(piece.pos) * _pieceHeight;
        if (_mouse.x < xPos || _mouse.x > (xPos + _pieceWidth) || _mouse.y < yPos || _mouse.y > (yPos + _pieceHeight)) {
        } else {
            return piece;
        }
    }
    return null;
}

function canMove() {
    console.log('can move');
    //top
    let position = _currentPiece.pos - _puzzleCols;
    if (position >= 0 && position < _maxPosition && !_pieces[position].active) return position;
    //right
    position = _currentPiece.pos + 1;
    if (position >= 0 && position < _maxPosition && !_pieces[position].active) return position;
    //bottom
    position = _currentPiece.pos + _puzzleCols;
    if (position >= 0 && position < _maxPosition && !_pieces[position].active) return position;
    //left
    position = _currentPiece.pos - 1;
    if (position >= 0 && position < _maxPosition && !_pieces[position].active) return position;
    return -1;
}


function resetPuzzleAndCheckWin() {

    console.log('reset');
    _stage.clearRect(0, 0, _puzzleWidth, _puzzleHeight);
    var gameWin = true;
    var i;
    var piece;
    for (i = 0; i < _pieces.length; i++) {
        piece = _pieces[i];
        drawPuzzleBoard(piece);
        if (piece.order !== piece.pos) {
            gameWin = false;
        }
    }
    if (gameWin) {
        console.log('wooohoooooo WIIIIIIIIIIIIIIIIIIIN');
        setTimeout(gameOver, 500);
    }
}

function gameOver() {
    console.log('game over');
    _started = false;
    document.onmousedown = null;
    document.onmousemove = null;
    document.onmouseup = null;
    initPuzzle();
}

function getInvCount() {
    let inv_count = 0;
    for (let i = 0; i < _maxPosition - 1; i++) {
        for (let j = i + 1; j < _maxPosition; j++) {
            if (_pieces[j].pos && _pieces[i].pos && _pieces[i].pos > _pieces[j].pos)
                inv_count++;
        }
    }
    return inv_count;
}

function findXPosition() {
    for (let i = _puzzleCols - 1; i >= 0; i--) {
        for (let j = _puzzleCols - 1; j >= 0; j--) {
            if (!_pieces[i][j].active)
                return _puzzleCols - i;
        }
    }
}

function isSolvable() {
    let invCount = getInvCount();

    // If grid is odd, return true if inversion
    // count is even.
    if (_puzzleCols & 1)
        return !(invCount & 1);

    else     // grid is even
    {
        let pos = findXPosition();
        if (pos & 1)
            return !(invCount & 1);
        else
            return invCount & 1;
    }
}


function getImage(url) {
    return new Promise(
        function (resolve, reject) {
            var img = new Image();
            img.onload = function () {
                resolve(url);
            };
            img.onerror = function () {
                reject(url);
            };
            img.src = url;
        }
    );
}

function onSuccess(url) {
    console.log('sucesssssss');
    _imageUrl = url;
    document.getElementById('chosen-img').innerText = 'Wybrano obrazek: ' + url.split('/').reverse()[0];
    // document.getElementById("obrazek").src = url;
}

function onFailure(url) {
    console.log("Error loading " + url);
}

/*loadFull wywoływana na onclick na obrazku skmpresowanym */

function loadFull(name) {
    var obietnica = getImage("../img/puzzle/" + name);
    obietnica.then(onSuccess).catch(onFailure);
}
