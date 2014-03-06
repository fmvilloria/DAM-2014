package test;

import static org.junit.Assert.*;

import org.junit.Test;

import clases.Fizz;

public class TestFizz {

	@Test
	public void validar1() {
		Fizz f = new Fizz();
		
		assertEquals("Fizz de 1", "", f.fizz(1));
	}

	@Test
	public void validar2() {
		Fizz f = new Fizz();
		
		assertEquals("Fizz de 2", "", f.fizz(2));
	}

	@Test
	public void validar3() {
		Fizz f = new Fizz();
		
		assertEquals("Fizz de 3", "Fizz", f.fizz(3));
	}

	@Test
	public void validar4() {
		Fizz f = new Fizz();
		
		assertEquals("Fizz de 4", "", f.fizz(4));
	}

	@Test
	public void validar5() {
		Fizz f = new Fizz();
		
		assertEquals("Fizz de 5", "", f.fizz(5));
	}

	@Test
	public void validar6() {
		Fizz f = new Fizz();
		
		assertEquals("Fizz de 6", "Fizz", f.fizz(6));
	}

	@Test
	public void validar9() {
		Fizz f = new Fizz();
		
		assertEquals("Fizz de 9", "Fizz", f.fizz(9));
	}

	@Test
	public void validar15() {
		Fizz f = new Fizz();
		
		assertEquals("Fizz de 15", "Fizz", f.fizz(15));
	}
}
