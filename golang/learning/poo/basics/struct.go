package main

import "fmt"

// GO does not have classes, but it has structs to simulate classes

type Person struct {
	age             int
	birthDate       string
	characteristics map[string]string
	lastName        string
	name            string
	tastes          []string
}

func main() {
	lenin := Person{
		age:       19,
		birthDate: "02/04/2003",
		characteristics: map[string]string{
			"height":    "1.80",
			"weight":    "80",
			"eyesColor": "brown",
			"hairColor": "black",
			"skinColor": "medium",
			"religion":  "catholic",
		},
		name: "Lenin",
	}

	mathias := Person{
		age:       19,
		birthDate: "02/04/2003",
		characteristics: map[string]string{
			"height": "1.80",
		},
	}

	fmt.Println(lenin, mathias)
}
