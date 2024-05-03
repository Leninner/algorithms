package main

// Leetcode #728. Self Dividing Numbers
// https://leetcode.com/problems/self-dividing-numbers/

func selfDividingNumbers(left int, right int) []int {
	var result []int

	for i := left; i <= right; i++ {
		if isSelfDividingNumber(i) {
			result = append(result, i)
		}
	}
	return result
}

func isSelfDividingNumber(n int) bool {
	for i := n; i > 0; i /= 10 {
		digit := i % 10

		if digit == 0 || n%digit != 0 {
			return false
		}
	}

	return true
}
