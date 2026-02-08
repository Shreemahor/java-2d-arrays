package apps.row_column_diagonal;

public class row_column_diagonal {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] mat = new int[4][4];  // 4 * 4
		for (int n = 0; n < mat.length; n++) {
			for (int m = 0; m < mat[n].length; m++) {
				mat[n][m] = (int)(Math.random() * 2);
				System.out.print(mat[n][m] + " ");
			}
			System.out.println();
		}
		
		int last_max = 0, last_max_index = 0;
		for (int i = 0; i < mat.length; i++) {
			int max = 0;
			for (int j: mat[i]) {
				max += j;
			}
			if (max > last_max) {
				last_max = max;
				last_max_index = i;
			}
		}
		System.out.println("The index of the first row with the most 1's is " + last_max_index);
		
		last_max = 0; last_max_index = 0;
		int column = 0, last_column = 0;
		for (int[] a: mat) {
			int max = 0;
			for (int[] b: mat) {
				max += b[column];
			}
			column++;
			if (max > last_max) {
				last_max = max;
				last_column = column;
			}
            a.getClass();  // to make the 'unused variable' warning go away
		}
		System.out.println("The index of the first column with the most 1's is " + (last_column - 1));
	}

    public static void diagonal_main(String[] args) {
		// TODO Auto-generated method stub
		double[][] mat = new double[5][4];
		for (int n = 0; n < mat.length; n++) {
			for (int m = 0; m < 4; m++) {
				mat[n][m] = ((int)(Math.random() * 100)) / 100.0;
				System.out.print(mat[n][m] + " ");
			}
			System.out.println();
		}
		
		System.out.println("The sum of the major diagonal is " + sum_diagonal(mat));
	}

	public static double sum_diagonal(double[][] matrix) {
		double diagonal_sum = 0;
		int place = 0;
		for (double[] r: matrix) {
			diagonal_sum += r[place];
			if (place < r.length - 1) {place++;}
			else break;
		}
		return diagonal_sum;
	}
}
