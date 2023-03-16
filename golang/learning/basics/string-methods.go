package main

import (
	"fmt"
	"strings"
)

func main() {
	// String methods

	// split
	word := "hello"
	wordsSplitted := strings.Split(word, "")
	fmt.Println(wordsSplitted)

	// slice
	wordToSlice := "hello"
	slicedWord := wordToSlice[1:3]
	fmt.Println(slicedWord, wordToSlice)

	// length
	wordLength := "hello"
	fmt.Println(len(wordLength))

	// contains
	wordToCheck := "hello"
	fmt.Println(strings.Contains(wordToCheck, "lo"))

	// replace
	wordToReplace := "hellllllo"
	fmt.Println(strings.Replace(wordToReplace, "l", "x", 3))

	// to upper
	wordToUpper := "hello"
	fmt.Println(strings.ToUpper(wordToUpper))

	// to lower
	wordToLower := "HELLO"
	fmt.Println(strings.ToLower(wordToLower))

	// trim
	wordToTrim := "   hello   "
	fmt.Println(strings.TrimSpace(wordToTrim))

	// join
	wordsToJoin := []string{"hello", "world"}
	fmt.Println(strings.Join(wordsToJoin, " "))

	// index
	wordToIndex := "hello"
	fmt.Println(strings.Index(wordToIndex, "l"))

	// last index
	wordToLastIndex := "hello"
	fmt.Println(strings.LastIndex(wordToLastIndex, "l"))

	// repeat
	wordToRepeat := "hello"
	fmt.Println(strings.Repeat(wordToRepeat, 3))
}
