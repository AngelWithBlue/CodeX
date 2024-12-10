// Configuración inicial de Chessboard.js
var board = Chessboard('board1', {
    draggable: true, // Permite mover las piezas con el mouse
    dropOffBoard: 'trash', // Si una pieza se mueve fuera del tablero, se elimina
    sparePieces: true, // Permite mover piezas al tablero
});

// Función para manejar el estado del juego
var game = new Chess(); // Instancia del juego

// Función para actualizar el estado del juego
function renderMoveHistory(moves) {
    var historyElement = $('#move-history').empty();
    historyElement.empty();
    historyElement.append(moves.join(' '));
}

// Función para manejar el movimiento de las piezas
function makeBestMove() {
    var possibleMoves = game.ugly_moves();
    var bestMove = getBestMove(possibleMoves);
    game.ugly_move(bestMove);
    renderMoveHistory(game.history());
    board.position(game.fen());
}

// Función para elegir el mejor movimiento (esto puede hacerse más avanzado con AI)
function getBestMove(possibleMoves) {
    return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
}

// Función para iniciar el juego
function startGame() {
    game = new Chess(); // Reinicia el juego
    renderMoveHistory(game.history());
    board.position(game.fen());
}

// Iniciar el tablero
startGame();
