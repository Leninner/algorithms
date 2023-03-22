package main

import (
	"fmt"
	"strings"
)

func toWeirdCase(str string) string {
	weirdWord := ""

	cont := 0
	for i := 0; i < len(str); i++ {
		if string(str[i]) == " " {
			cont = 0
			weirdWord += " "
			continue
		}

		if cont%2 == 0 {
			weirdWord += strings.ToUpper(string(str[i]))
		} else {
			weirdWord += strings.ToLower(string(str[i]))
		}
		cont++
	}

	return weirdWord
}

func main() {
	word := "Weird string case"

	fmt.Println(toWeirdCase(word))
}
