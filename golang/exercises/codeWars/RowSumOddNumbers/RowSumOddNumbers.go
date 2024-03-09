package main

// n => number of row
func RowSumOddNumbers(n int) int {
	startIndex := sumUntilN(n-1) + 1
	startOddNumber := 2*startIndex - 1
	sum := 0

	for i := 0; i < n; i++ {
		sum += startOddNumber
		startOddNumber += 2
	}

	return sum
}

func sumUntilN(n int) int {
	// sum of n natural numbers
	return n * (n + 1) / 2
}

func RowSumOddNumbersV2(n int) int {
	// this solution works because the sum of any row is the cube of the row number
	return n * n * n
}

func main() {
	RowSumOddNumbers(1)
	RowSumOddNumbers(93)
	RowSumOddNumbers(101)
}
