package clases;

public class Buzz {

	public boolean isBuzz(int i) {
		return (i % 5 == 0);
	}

	public String buzz(int i) {
		String result = "";
		
		if (isBuzz(i)) {
			result = "Buzz";
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
