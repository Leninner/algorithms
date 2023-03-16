package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Println("The sum of the first hundred is:", strconv.Itoa(getSumOfFirstHundred()))
	fmt.Println("The sum of the primes until 100 is:", strconv.Itoa(getTheSumOfPrimesUntilToN(100)))
	fmt.Println("Is 'racecar' a palindrome?", isPalindrome("racecar"))
	fmt.Println("Is 'hello' a palindrome?", isPalindrome("hello"))
	fmt.Println("Is '123' a number?", isNumber("123"))
	fmt.Println("Is 'hello' a number?", isNumber("hello"))
}

// a method to get the sum of first 100 numbers
func getSumOfFirstHundred() int {
	sum := 0

	for i := 1; i <= 100; i++ {
		sum += i
	}

	return sum
}

func getTheSumOfPrimesUntilToN(n int) int {
	sum := 0

	for i := 2; i <= n; i++ {
		if isPrime(i) {
			sum += i
		}
	}

	return sum
}

func isPrime(n int) bool {
	for i := 2; i < n; i++ {
		if n%i == 0 {
			return false
		}
	}

	return true
}

// method to check if a string is a palindrome
func isPalindrome(s string) bool {
	for i := 0; i < len(s)/2; i++ {
		if s[i] != s[len(s)-i-1] {
			return false
		}
	}

	return true
}

// method to check if a string is a number
func isNumber(s string) bool {
	_, err := strconv.Atoi(s)

	return err == nil
}
