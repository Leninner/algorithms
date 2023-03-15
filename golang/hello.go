package main

// the fmt package implements formatted I/O with functions analogous to C's printf and scanf.
import (
	"fmt"
	"strconv"
)

// the main function is the entry point for the executable program.
func main() {
	fmt.Println(sayHelloTo("World"))
	fmt.Println(sayMyAge(25))

	friends := []string{"John", "Paul", "George", "Ringo"}
	friendsAge := []int{25, 26, 27, 28}

	fmt.Println(sayMyFriends(friends))
	fmt.Println(sayMyFriendsAge(friendsAge))
}

func sayHelloTo(name string) string {
	return "Hello, " + name + "!"
}

func sayMyAge(age int) string {
	stringAge := strconv.Itoa(age)
	return "I'm " + stringAge + " years old"
}

func sayMyFriends(friends []string) string {
	output := "My friends are: "

	for i, friend := range friends {
		output += friend

		if i != len(friends)-1 {
			output += ", "
		}
	}

	return output
}

func sayMyFriendsAge(friendsAge []int) string {
	output := "My friends' ages are: "

	for i, age := range friendsAge {
		output += strconv.Itoa(age)

		if i != len(friendsAge)-1 {
			output += ", "
		}
	}

	return output
}
