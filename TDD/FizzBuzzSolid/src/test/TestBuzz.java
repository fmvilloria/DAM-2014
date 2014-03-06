package test;

import static org.junit.Assert.*;

import org.junit.Test;

import clases.Buzz;

public class TestBuzz {

	@Test
	public void validar1() {
		Buzz f = new Buzz();
		
 		assertEquals("Buzz de 1", "", f.buzz(1));
	}

	@Test
	public void validar2() {
		Buzz f = new Buzz();
		
		assertEquals("Buzz de 2", "", f.buzz(2));
	}

	@Test
	public void validar3() {
		Buzz f = new Buzz();
		
		assertEquals("Buzz de 3", "", f.buzz(3));
	}

	@Test
	public void validar4() {
		Buzz f = new Buzz();
		
		assertEquals("Buzz de 4", "", f.buzz(4));
	}

	@Test
	public void validar5() {
		Buzz f = new Buzz();
		
		assertEquals("Buzz de 5", "Buzz", f.buzz(5));
	}

	@Test
	public void validar6() {
		Buzz f = new Buzz();
		
		assertEquals("Buzz de 6", "", f.buzz(6));
	}

	@Test
	public void validar10() {
		Buzz f = new Buzz();
		
		assertEquals("Buzz de 10", "Buzz", f.buzz(10));
	}

	@Test
	public void validar15() {
		Buzz f = new Buzz();
		
		assertEquals("Buzz de 15", "Buzz", f.buzz(15));
	}
}
