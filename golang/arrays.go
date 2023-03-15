package main

import "strconv"

func sayMyParentsAge(parentsAge []int) string {
	output := "My parents' ages are: "

	for i, age := range parentsAge {
		output += strconv.Itoa(age)

		if i != len(parentsAge)-1 {
			output += ", "
		}
	}

	return output
}
