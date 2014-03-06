package test;

import static org.junit.Assert.*;

import org.junit.Test;

import clases.FizzBuzz;

public class TestFizzBuzz {

	@Test
	public void validar1() {
		FizzBuzz fb = new FizzBuzz();
		
		assertEquals("FizzBuzz de 1", "1", fb.fizzbuzz(1));
	}

	@Test
	public void validar2() {
		FizzBuzz fb = new FizzBuzz();
		
		assertEquals("FizzBuzz de 2", "2", fb.fizzbuzz(2));
	}

	@Test
	public void validar3() {
		FizzBuzz fb = new FizzBuzz();
		
		assertEquals("FizzBuzz de 3", "Fizz", fb.fizzbuzz(3));
	}

	@Test
	public void validar4() {
		FizzBuzz fb = new FizzBuzz();
		
		assertEquals("FizzBuzz de 4", "4", fb.fizzbuzz(4));
	}

	@Test
	public void validar5() {
		FizzBuzz fb = new FizzBuzz();
		
		assertEquals("FizzBuzz de 5", "Buzz", fb.fizzbuzz(5));
	}

	@Test
	public void validar6() {
		FizzBuzz fb = new FizzBuzz();
		
		assertEquals("FizzBuzz de 6", "Fizz", fb.fizzbuzz(6));
	}

	@Test
	public void validar9() {
		FizzBuzz fb = new FizzBuzz();
		
		assertEquals("FizzBuzz de 9", "Fizz", fb.fizzbuzz(9));
	}

	@Test
	public void validar10() {
		FizzBuzz fb = new FizzBuzz();
		
		assertEquals("FizzBuzz de 10", "Buzz", fb.fizzbuzz(10));
	}

	@Test
	public void validar15() {
		FizzBuzz fb = new FizzBuzz();
		
		assertEquals("FizzBuzz de 15", "Fizz Buzz", fb.fizzbuzz(15));
	}
}
