package apps.latinsquare;
import java.util.*;

public class latinsquare {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

        Scanner input = new Scanner(System.in);
        System.out.print("Enter the size of the Latin Square: ");
        int number = input.nextInt();
        input.close();
		int[][] latin_square_array = latin_square(number);  // 4 * 4
		// value is saved received in latin_square_array
		for_each_print(latin_square_array);
	}
	
	public static int[][] latin_square(int s) {
		
		int[] numbers_array = new int[s];
		for (int i = 0; i < s; i++) {
			numbers_array[i] = i + 1;
		}
		int my_index = 0;
		
		int[][] result = new int[s][s];
		for (int n = 0; n < result.length; n++) {
			for (int m = 0; m < s; m++) {
				result[n][m] = numbers_array[my_index];
				if (my_index < numbers_array.length - 1) {
					my_index++;
				}
				else {
					my_index = 0;
				}
			}
			my_index++;
		}
		return result;
	}
	
	public static void for_each_print(int[][] array) {
		for (int[] e: array) {
			for (int j: e) {
				System.out.print(j + " ");
			}
			System.out.println();
		}
	}
}