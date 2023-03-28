package main

import "fmt"

func countOdds(number int) int {
	if number%2 == 0 {
		return number / 2
	}

	return (number / 2) + 1
}

func main() {
	fmt.Println("Count odds from 1 to 978:", countOdds(978))
	fmt.Println("Count odds from 1 to 979:", countOdds(979))
	fmt.Println("Count odds from 1 to 15:", countOdds(15))

	var userNumber int
	fmt.Print("Enter a number: ")
	fmt.Scan(&userNumber)

	fmt.Println("Count odds from 1 to", userNumber, ":", countOdds(userNumber))
}
