package main

import "fmt"

func main() {
	// 1. Declare a variable with the var keyword and assign a value
	var a string = "initial"
	var b byte = 'a'
	var c int = 1
	var d float32 = 1.1
	var e float64 = 1.2
	var f bool = true
	var g map[string]int = map[string]int{"a": 1, "b": 2}
	var h []int = []int{1, 2, 3}
	var i [3]int = [3]int{1, 2, 3}

	fmt.Println(a, b, c, d, e, f, g, h, i)

	// 2. Declare a variable without the var keyword and assign a value
	A := string("initial")
	B := byte('a')
	C := int(1)
	D := float32(1.1)
	E := float64(1.2)
	F := bool(true)
	G := map[string]int{"a": 1, "b": 2}
	H := []int{1, 2, 3}
	I := [3]int{1, 2, 3}

	fmt.Println(A, B, C, D, E, F, G, H, I)

	// 3. Declare multiple variables inside brackets and the var keyword
	var (
		j string = "initial"
		k byte   = 'a'
		l int    = 1
	)

	fmt.Println(j, k, l)

	// 4. Declare multiple variables without the var keyword

	J, K, L := "initial", 'a', 1

	fmt.Println(J, K, L)

	// 5. Declare constants
	const (
		pi = 3.14
	)

	const letters string = "abcdefghijklmnopqrstuvwxyz"

	fmt.Println(pi)
	fmt.Println(letters)
}
