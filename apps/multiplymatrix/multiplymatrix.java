public class multiplymatrix {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] mat1 = {{1, 2}, {3, 4}, {5, 6}};  // 3 * 2
		int[][] mat2 = {{1, 2, 3}, {4, 5, 6}};  // 2 * 3
		int[][] product = new int[mat1.length][mat2[0].length];  // 3 * 3

		for (int i = 0; i < mat1.length; i++) {
			for (int p = 0; p < mat1[i].length; p++) {
				for (int j = 0; j < mat2[p].length; j++) {
					product[i][j] += mat2[p][j] * mat1[i][p];
				}
			}
		}
		
		System.out.println("Product Matrix");
		print_2d_array(product);
	}
	
	public static void print_2d_array(int[][] array) {
		for (int[] n: array) {
			for (int m: n) {
				System.out.print(m + " ");
			}
			System.out.println();
		}
	}
}