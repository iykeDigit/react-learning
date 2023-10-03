"use strict";
function isValidSudoku(board) {
    const set = new Set();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const cell = board[i][j];
            if (cell == '.')
                continue;
            const row = `row: ${i}, value:${cell}`;
            const col = `col: ${j}, value:${cell}`;
            let boxNum = (3 * Math.floor(i / 3)) + Math.floor(j / 3);
            const box = `boxNum: ${boxNum}, value:${cell}`;
            if (set.has(row) || set.has(col) || set.has(box)) {
                console.log('false');
                return false;
            }
            set.add(row).add(col).add(box);
        }
    }
    return true;
}
let myArray = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
const result = isValidSudoku(myArray);
console.log(result);
//# sourceMappingURL=ValidSudoku.js.map