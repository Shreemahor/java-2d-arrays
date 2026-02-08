package apps.random_matrix;

public class random_matrix {
    public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] random_array = random2Darray(8, 99);
		System.out.print("\nSum: " + return_sum(random_array));
		System.out.print("\nAverage: " + (return_sum(random_array)) / (4 * 5 * 1.0));
	}

	public static int[][] random2Darray(int r, int c) {
		int[][] result = new int[r][c];
		for (int n = 0; n < result.length; n++) {
			for (int m = 0; m < c; m++) {
				result[n][m] = (int)(Math.random() * 100);
				System.out.print(result[n][m] + " ");
			}
			System.out.println();
		}
		return result;
	}
	
	public static int return_sum(int[][] array) {
		int sum = 0;
		for (int[] e: array) {
			for (int n: e) {
				sum += n;
			}
		}
		return sum;
	}
}
