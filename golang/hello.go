package main

import (
	"example/golang/sum"
	"fmt"
)

func main() {
	result := sum.Sum(5, 5)
	hello := "Leninsin"
	singleCharacter := 'a'
	fmt.Println(result)
	fmt.Println(hello)
	fmt.Println(singleCharacter, "is a single character")
}
