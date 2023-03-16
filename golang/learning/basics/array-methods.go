package main

import "fmt"

func main() {
	// Array methods

	// length
	wordLength := [5]string{"h", "e", "l", "l", "o"}
	fmt.Println(len(wordLength))

	// append
	wordsToAppend := []string{"h", "e", "l", "l", "o"}
	wordsToAppend = append(wordsToAppend, "world")

	fmt.Println(wordsToAppend)

	// copy
	wordsToCopy := []string{"h", "e", "l", "l", "o"}
	wordsToCopy2 := make([]string, len(wordsToCopy))
	copy(wordsToCopy2, wordsToCopy)

	fmt.Println(wordsToCopy2, wordsToCopy)

	// delete
	wordsToDelete := []string{"h", "e", "l", "l", "o"}
	wordsToDelete = append(wordsToDelete[:2], wordsToDelete[3:]...)

	fmt.Println(wordsToDelete)

	// insert
	wordsToInsert := []string{"h", "e", "l", "l", "o"}
	wordsToInsert = append(wordsToInsert, []string{"w", "o", "r", "l", "d"}...)

	fmt.Println(wordsToInsert)

	// pop
	wordsToPop := []string{"h", "e", "l", "l", "o"}
	wordsToPop = wordsToPop[:len(wordsToPop)-1]

	fmt.Println(wordsToPop)

	// unshift
	wordsToUnshift := []string{"h", "e", "l", "l", "o"}
	wordsToUnshift = append([]string{"w", "o", "r", "l", "d"}, wordsToUnshift...)

	fmt.Println(wordsToUnshift)

	// reverse
	wordsToReverse := []string{"h", "e", "l", "l", "o"}
	for i, j := 0, len(wordsToReverse)-1; i < j; i, j = i+1, j-1 {
		wordsToReverse[i], wordsToReverse[j] = wordsToReverse[j], wordsToReverse[i]
	}

	fmt.Println(wordsToReverse)

	// shift
	wordsToShift := []string{"h", "e", "l", "l", "o"}
	wordsToShift = wordsToShift[1:]

	fmt.Println(wordsToShift)

	// slice
	wordsToSlice := []string{"h", "e", "l", "l", "o"}
	slicedWords := wordsToSlice[1:3]

	fmt.Println(slicedWords, wordsToSlice)
}
