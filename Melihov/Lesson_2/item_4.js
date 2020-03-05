
//4. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
//Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

//5*. Заполнить созданную таблицу фигурами, фигуры должны выглядеть как картинки, либо можно использовать символы
// (существуют символы шахматных фигур) причем все фигуры должны стоять на своих местах и быть соответственно черными и
// белыми.

function chessboard() {
    let newTable = document.createElement( 'table' ),
        lets = [ '','A','B','C','D','E','F','G','H','' ],
        blackFigs1 = [ '8','♜','♞','♝','♛','♚','♝','♞','♜','8' ],
        whiteFigs1 = [ '1','♖','♘','♗','♕','♔','♝','♗','♖','1' ],
        blackFigs2 = [ '7','♟','♟','♟','♟','♟','♟','♟','♟','7' ],
        whiteFigs2 = [ '2','♙','♙','♙','♙','♙','♙','♙','♙','2' ];
    for ( let i = 0, a = 9; i < 10, a >= 0; i++, a-- ) {
        let newTr = newTable.insertRow(i);
        for ( let j = 0; j < 10; j++ ) {
            let newTd = newTr.insertCell( j );
            switch (i) {
                case 0:
                    newTd.innerText = lets[ j ];
                    break;
                case 1:
                    newTd.innerHTML = blackFigs1[ j ];
                    break;
                case 2:
                    newTd.innerHTML = blackFigs2[ j ];
                    break;
                case 7:
                    newTd.innerHTML = whiteFigs2[ j ];
                    break;
                case 8:
                    newTd.innerHTML = whiteFigs1[ j ];
                    break;
                case 9:
                    newTd.innerText = lets[ j ];
                    break;
                default:
                    if ( j === 0 || j === 9 ) {
                        newTd.innerHTML = a;
                    }
                    break;
            }
        }
    }
    document.body.appendChild( newTable );
};
chessboard();