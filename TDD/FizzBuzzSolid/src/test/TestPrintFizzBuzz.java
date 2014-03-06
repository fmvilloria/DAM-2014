package test;

import static org.junit.Assert.*;

import org.junit.Test;

import clases.PrintFizzBuzz;

public class TestPrintFizzBuzz {

	@Test
	public void test1() {
		PrintFizzBuzz fb = new PrintFizzBuzz();
		
		assertEquals("TestFizzBuzz de 1", "1", fb.print(1));
	}

	@Test
	public void test2() {
		PrintFizzBuzz fb = new PrintFizzBuzz();
		
		assertEquals("TestFizzBuzz de 2", "1, 2", fb.print(2));
	}

	@Test
	public void test3() {
		PrintFizzBuzz fb = new PrintFizzBuzz();
		
		assertEquals("TestFizzBuzz de 3", "1, 2, Fizz", fb.print(3));
	}
}
