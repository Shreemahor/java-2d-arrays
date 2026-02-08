package apps.simple_2d_array;

public class simple_2d_array {
    public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] a1 = {1, 2, 3};
		int[] a2 = {4, 5, 6};
		int[] a3 = {7, 8, 9};
		int[] a4 = {10, 11, 12};
		
		int[][] mat1 = {a1, a2, a3, a4};
		
		print_2Darray(mat1);
		System.out.println();
		for_each_print(mat1);
	}
	
	public static void print_2Darray(int[][] array) {
		for (int r = 0; r < array.length; r++) {
			for (int c = 0; c < array[c].length; c++) {
				System.out.print(array[r][c] + " ");
			}
			System.out.println();
		}
	}
	
	public static void for_each_print(int[][] array) {
		for (int[] e: array) {
			for (int n: e) {
				System.out.print(n + " ");
			}
			System.out.println();
		}
	}
}
