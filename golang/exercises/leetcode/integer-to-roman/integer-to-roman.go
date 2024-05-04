package main

import (
	"strings"
)

// Leetcode #12 Integer to Roman | https://leetcode.com/problems/integer-to-roman/description/
func IntegerToRoman(number int) string {
	factor := 1
	result := ""

	romanNumbers := map[int]string{
		1:    "I",
		4:    "IV", // split from one character to another
		5:    "V",
		9:    "IX", // split from one character to another
		10:   "X",
		40:   "XL", // split from one character to another
		50:   "L",
		90:   "XC", // split from one character to another
		100:  "C",
		400:  "CD", // split from one character to another
		500:  "D",
		900:  "CM", // split from one character to another
		1000: "M",
	}

	if romanNumbers[number] != "" {
		return romanNumbers[number]
	}

	for number > 0 {
		digit := number % 10
		number /= 10

		// when digit is 3 or less
		if digit < 4 {
			result = strings.Repeat(romanNumbers[factor], digit) + result
		}

		// when digit is 4 or 9
		if digit == 4 || digit == 9 {
			result = romanNumbers[digit*factor] + result
		}

		// when digit is 5 or 6 or 7 or 8
		if digit > 4 && digit < 9 {
			result = romanNumbers[5*factor] + strings.Repeat(romanNumbers[factor], digit-5) + result
		}

		factor *= 10
	}

	return result
}
