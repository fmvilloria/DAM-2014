package test;

import static org.junit.Assert.*;

import org.junit.Test;

import clases.FizzBuzz;

public class TestFizzBuzz {

	@Test
	public void validar1() {
		FizzBuzz f = new FizzBuzz();
		
		assertEquals("FizzBuzz de 1", "", f.fizzbuzz(1));
	}
	
	@Test
	public void validar2() {
		FizzBuzz f = new FizzBuzz();
		
		assertEquals("FizzBuzz de 2", "", f.fizzbuzz(2));
	}
	
	@Test
	public void validar3() {
		FizzBuzz f = new FizzBuzz();
		
		assertEquals("FizzBuzz de 3", "", f.fizzbuzz(3));
	}
	
	@Test
	public void validar4() {
		FizzBuzz f = new FizzBuzz();
		
		assertEquals("FizzBuzz de 4", "", f.fizzbuzz(4));
	}
	
	@Test
	public void validar5() {
		FizzBuzz f = new FizzBuzz();
		
		assertEquals("FizzBuzz de 5", "", f.fizzbuzz(5));
	}
	
	@Test
	public void validar6() {
		FizzBuzz f = new FizzBuzz();
		
		assertEquals("FizzBuzz de 6", "", f.fizzbuzz(6));
	}
	
	@Test
	public void validar9() {
		FizzBuzz f = new FizzBuzz();
		
		assertEquals("FizzBuzz de 9", "", f.fizzbuzz(9));
	}
	
	@Test
	public void validar10() {
		FizzBuzz f = new FizzBuzz();
		
		assertEquals("FizzBuzz de 10", "", f.fizzbuzz(10));
	}

	@Test
	public void validar15() {
		FizzBuzz f = new FizzBuzz();
		
		assertEquals("FizzBuzz de 15", "Fizz Buzz", f.fizzbuzz(15));
	}

	@Test
	public void validar30() {
		FizzBuzz f = new FizzBuzz();
		
		assertEquals("FizzBuzz de 30", "Fizz Buzz", f.fizzbuzz(30));
	}
}
