class Solution {
    public void solveSudoku(char[][] board) {
        helper(board);
    }


    public static boolean canIFill(char[][] board, int row, int col, char c) {
        for (int i = 0; i <= 8; i++) {
            if (board[row][i] == c || board[i][col] == c) {
                return false;
            }
        }

        int rowGroup = (row / 3); // 0 or 1 or 2
        int groupRowStart = rowGroup * 3;

        int colGroup = (col / 3); // 0 or 1 or 2
        int groupColStart = colGroup * 3;

        for (int i = groupRowStart; i <= groupRowStart + 2; i++) {
            for (int j = groupColStart; j <= groupColStart + 2; j++) {
                if (i == row && j == col)
                    continue;

                if (board[i][j] == c) {
                    return false;
                }
            }
        }

        return true;
    }

    public static boolean helper(char[][] board) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == '.') {
                    for (int i = 1; i <= 9; i++) {
                        if (canIFill(board, row, col, (char) (i + '0'))) {
                            board[row][col] = (char) (i + '0');
                            boolean result = helper(board);
                            if (result) {
                                return true;
                            }
                            board[row][col] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

}