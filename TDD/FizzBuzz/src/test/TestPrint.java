package test;

import static org.junit.Assert.*;

import org.junit.Test;

import clases.FizzBuzz;

public class TestPrint {

	@Test
	public void test1() {
		FizzBuzz fb = new FizzBuzz();
		
		assertEquals("FizzBuzz de 1", "1", fb.print(1));
	}

	@Test
	public void test2() {
		FizzBuzz fb = new FizzBuzz();
		
		assertEquals("FizzBuzz de 2", "1, 2", fb.print(2));
	}
}
