import java.util.Scanner;

public class tictactoe {
	
	public static Scanner input = new Scanner(System.in);

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String[][] board = {{" ", " ", " "},
				   	        {" ", " ", " "},
				            {" ", " ", " "}};
		String player = "O";  // O Starts first
		System.out.println(" TIC TAC TOE");
		display(board);
		
		do {
			make_move(board, player);
			display(board);
			if (player.equals("X")) {player = "O";}
			else {player = "X";}
		} while (game_is_continuing(board));
	}

	public static void display(String[][] b) {
		System.out.print(" ___________\r\n"
				+ "| " + b[0][0] + " | " + b[0][1] + " | " + b[0][2] + " |\r\n"
				+ "|___|___|___|\r\n"
				+ "| " + b[1][0] + " | " + b[1][1] + " | " + b[1][2] + " |\r\n"
				+ "|___|___|___|\r\n"
				+ "| " + b[2][0] + " | " + b[2][1] + " | " + b[2][2] + " |\r\n"
				+ "|___|___|___|\r\n\n");
		
	}
	
	public static boolean win(String[][] b, String p) {
		int n = 0;
		while (n < 3) {
			if (p.equals(b[n][0]) && p.equals(b[n][1]) && (p.equals(b[n][2]))) {return true;}
			n++;
		}
		n = 2;
		while (n >= 0) {
			if (p.equals(b[0][n]) && p.equals(b[1][n]) && (p.equals(b[2][n]))) {return true;}
			n--;
		}
		if (p.equals(b[0][0]) && p.equals(b[1][1]) && (p.equals(b[2][2])) ||
			p.equals(b[0][2]) && p.equals(b[1][1]) && (p.equals(b[2][0]))) {return true;} 
		return false;
	}
	
	public static boolean draw(String[][] b) {
		for (String[] i: b) {
			for (String j: i) {
				if (j.equals(" ")) {return false;}
			}
		}
		return true;
	}
	
	public static void make_move(String[][] b, String p) {
		// Here row and column start from 1
		int row = 4;
		int column = 4;
		
		while (row > 3 || column > 3 || !b[row][column].equals(" ")) {
			System.out.print("Enter Row: ");
			row = input.nextInt() - 1;
			System.out.print("Enter Column: ");
			column = input.nextInt() - 1;
			if (row > 3 || column > 3) {
				System.out.println("Row and/or Column not valid");
			}
			if (column <= 3 && row <= 3 && !b[row][column].equals(" ")) {
				System.out.println("Cell is already occupied");
			}
		}
		
		b[row][column] = p;
		if (win(b, p)) {
			System.out.println(p + " won!");
		}
		if (draw(b)) {
			System.out.println("It's a draw");
		}
	}
	
	public static boolean game_is_continuing(String[][] b) {
		if (draw(b)) {
			return false;
		}
		if (win(b, "O") || win(b, "X")) {
			return false;
		}
		return true;
	}
}