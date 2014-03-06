package clases;

public class Fizz {

	public boolean isFizz(int i) {
		return (i % 3 == 0);
	}
	
	public String fizz(int i) {
		String result = "";
		
		if (isFizz(i)) {
			result = "Fizz";
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
