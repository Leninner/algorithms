package main

func main() {
	// Conditionals

	// if
	if true {
		println("true")
	}

	// if else
	if false {
		println("false")
	} else {
		println("true")
	}

	// if else if
	if false {
		println("false")
	} else if true {
		println("true")
	}

	// switch (no need for break)
	switch "hello" {
	case "hello":
		println("hello")
	case "world":
		println("world")
	default:
		println("default")
	}

	// switch with no condition
	switch {
	case true:
		println("true")
	case false:
		println("false")
	default:
		println("default")
	}

	// switch with fallthrough
	switch {
	case true:
		println("true")
		fallthrough
	case false:
		println("false")
	default:
		println("default")
	}
}
