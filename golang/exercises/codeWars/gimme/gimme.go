package main

import "fmt"

func gimme(array [3]int) int {
	tempArray := array

	for i := 0; i < len(array); i++ {
		for j := 0; j < len(array); j++ {
			if array[i] > array[j] {
				array[i], array[j] = array[j], array[i]
			}
		}
	}

	for i := 0; i < len(tempArray); i++ {
		if tempArray[i] == array[1] {
			return i
		}
	}

	return 0
}

func main() {
	fmt.Println(gimme([3]int{10, 12, 4}))
}
