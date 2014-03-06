package clases;

public class FizzBuzz {
	
	public String fizzbuzz(int i) {
		String result = new Integer(i).toString();
		
		if (i % 3 == 0 && i % 5 == 0) {
			result = "Fizz Buzz";
		} else if (i % 3 == 0) {
			result = "Fizz";
		} else if (i % 5 == 0) {
			result = "Buzz";
		}
		
		return result;
	}
	
	public String print(int i){
		String result = "";

		String separador = "";

		for (int j = 1; j <= i; j++) {
			if (i == j) {
				separador = "";
			} else {
				separador = ", ";
			}

			result = result + new Integer(j).toString() + separador;
		}

		return result;
	}
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
