package clases;

public class FizzBuzz {
	private String separador;
	
	public FizzBuzz(){
		this.separador = " ";
	}
	
	public String fizzbuzz(int i) {
		Fizz f = new Fizz();
		Buzz b = new Buzz();
		
		String result = f.fizz(i) + separador + b.buzz(i);
		
		if (!result.equals("Fizz" + separador + "Buzz")) {
			result = "";
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
