package main

import "strconv"

func main() {
	// Loops

	// for
	for i := 0; i < 5; i++ {
		println(i)
	}

	// for with no condition, simulates while
	i := 0

	for {
		if i >= 5 {
			break
		}
		println(i)
		i++
	}

	// for with no init and post statements
	i = 0

	for i < 5 {
		println(i)
		i++
	}

	// for with range
	for i, c := range "hello" {
		// i is the index
		// c is the rune
		println(i, strconv.QuoteRune(c))
	}

	// for with range and blank identifier
	for _, c := range "hello" {
		println(strconv.QuoteRune(c))
	}

	// for with range and blank identifier
	for i := range "hello" {
		println("index:", i)
	}

	// for with range and blank identifier
	for range "hello" {
		println("hello")
	}

	// for with range and blank identifier
	for i := range []int{1, 2, 3} {
		println("index:", i)
	}
}
