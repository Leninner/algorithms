package main

import (
	"fmt"
	"strconv"
)

func main() {
	// strings
	saySomeGreetings()

	// numbers
	saySomeAge()

	// booleans
	saySomeTruths()

	// arrays
	saySomeFriends()

	// maps
	saySomePeopleAge()
}

func saySomeGreetings() {
	fmt.Println("Hi, from the first line")
	fmt.Println("Hi, from the second line")
	fmt.Println("Hi, from the third line")
}

func saySomeAge() {
	// declaracion de variables
	numberInt := 12
	numberFloat := 12.123

	// conversión de un entero a un string
	numberStringInt := strconv.Itoa(numberInt)
	numberStringFloat := strconv.FormatFloat(numberFloat, 'f', 3, 64)

	// concatenación
	fmt.Println("Hi, I`m " + numberStringInt + " years old!")
	fmt.Println("Hi, I`m " + numberStringFloat + " years old!")
}

func saySomeTruths() {
	isMarried := true
	isLessThan18 := false

	fmt.Print("Is married? ")
	if isMarried {
		fmt.Println("Yes")
	} else {
		fmt.Println("No")
	}

	fmt.Print("Is less than 18? ")
	if isLessThan18 {
		fmt.Println("Yes")
	} else {
		fmt.Println("No")
	}
}

func saySomeFriends() {
	friends := []string{"Lenin", "Luis", "Luisa", "Luisito", "Luisita"}

	output := "My friends are: "

	// for loop
	for i := 0; i < len(friends); i++ {
		if i == len(friends)-1 {
			output += friends[i] + "."
			continue
		}

		output += friends[i] + ", "
	}

	fmt.Println(output)
}

func saySomePeopleAge() {
	people := map[string]int{
		"Lenin": 12,
		"Luis":  13,
		"Luisa": 14,
	}

	output := "My friends are: "

	// for loop
	for key, value := range people {
		if key == "Luisa" {
			output += key + " " + strconv.Itoa(value) + "."
			continue
		}

		output += key + " " + strconv.Itoa(value) + ", "
	}

	fmt.Println(output)
}
