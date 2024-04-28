package main

import (
	"math"
)

// Leetcode exercise: https://leetcode.com/problems/divide-two-integers/description/

func divide(dividend int, divisor int) int {
	signValue := getSignValue(dividend, divisor)

	quotient := 0
	absDividend := abs(dividend)
	absDivisor := abs(divisor)

	for absDividend >= absDivisor {
		q := 0

		for absDividend > absDivisor<<(q+1) {
			q++
		}

		quotient += 1 << q
		absDividend -= absDivisor << q
	}

	if signValue == -1 {
		quotient = -quotient
	}

	return getSafeReturnedValue(quotient)
}

// Returns -1 if the quotient should be negative, 1 otherwise
// The sign of the quotient is determined by the sign of the dividend and the divisor
/**
 * + * + = +
 * - * - = +
 * + * - = -
 * - * + = -
 */
func getSignValue(dividend int, divisor int) int {
	// + * - = -
	if dividend > 0 && divisor < 0 {
		return -1
	}

	// - * + = -
	if divisor > 0 && dividend < 0 {
		return -1
	}

	// - * - = +
	// + * + = +
	return 1
}

func abs(x int) int {
	if x < 0 {
		return -x
	}

	return x
}

func getSafeReturnedValue(number int) int {
	if number > math.MaxInt32 {
		return math.MaxInt32
	}

	if number < math.MinInt32 {
		return math.MinInt32
	}

	return number
}
