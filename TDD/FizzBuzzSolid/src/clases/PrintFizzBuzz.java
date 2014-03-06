package clases;

public class PrintFizzBuzz {
	String separador;
	
	public PrintFizzBuzz(){
		this.separador = ", ";
	}
	
	public String print(int i){
		String result = "";
		
		Fizz f = new Fizz();
		Buzz b = new Buzz();
		FizzBuzz fb = new FizzBuzz();

		for (int j = 1; j <= i; j++) {
			if (!fb.fizzbuzz(j).equals("")) {
				result += fb.fizzbuzz(j);
			} else if (!f.fizz(j).equals("") || !b.buzz(j).equals("")) {
				result += f.fizz(j) + b.buzz(j);
			} else {
				result += new Integer(j).toString();
			}

			if (i != j) {
				result += separador;
			}
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
