package apps.sum_mirror;

public class sum_mirror {
    public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] mat = {{1, 2, 3},
					   {4, 5, 6},
					   {7, 8, 9},
					   {10, 11, 12}};
		/* Other sample outputs: 
   		int[][] mat = {{13, 14, 15}, {16, 17, 18}, {19, 20, 21}, {22, 23, 24}, {25, 26, 27}};
		int[][] mat = {{99, 22, 44, 77}, {21, 12, 63, 36}};
		int[][] mat = {{321, 657}, {987, 324}, {867, 645}};
		*/
		mirror(mat);
	}

    public static void sum(String[] args) {
		// TODO Auto-generated method stub
		int[][] matrix = {{1, 2, 3},
						  {4, 5, 6},
						  {7, 8, 9},
						  {10, 11, 12}};
		for (int[] r: matrix) {
			int row_sum = 0;
			for (int c: r) {
				row_sum += c;

			}
			System.out.println("sum of row is " + row_sum);
		}
		
		for (int c = 0; c < matrix[0].length; c++) {
			int col_sum = 0;
			for (int r = 0; r < matrix.length; r++) {
				col_sum += matrix[r][c];
			}
			System.out.println("Sum of column " + c + " is " + col_sum);
		}
	}

	public static void mirror(int[][] matrix) {
		for (int n = 0; n < matrix.length / 2; n++) {
			matrix[n] = matrix[matrix.length - n - 1];
		}
		for (int[] i: matrix) {
			for (int j: i) {
				System.out.print(j + " ");
			}
			System.out.println();
		}
	}
}
