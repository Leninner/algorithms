package nearest

import (
	"fmt"
	"math"
)

func NearestSq(n int) int {
	base := int(math.Sqrt(float64(n)))
	if base*base == n {
		return n
	}

	/*
		La expresión se compone de dos partes:

		(base+1)*(base+1)-n: esto calcula la diferencia entre el cuadrado perfecto más cercano que es mayor que n y n.
		n-(base*base): esto calcula la diferencia entre n y el cuadrado perfecto más cercano que es menor o igual que n.

		La condición se cumple si la primera diferencia es menor que la segunda diferencia. En otras palabras, esto significa que (base+1)*(base+1) está más cerca de n que base*base. Si se cumple esta condición, entonces se devuelve (base+1)*(base+1) como el cuadrado perfecto más cercano a n.
	*/

	if (base+1)*(base+1)-n < n-(base*base) {
		return (base + 1) * (base + 1)
	}

	return base * base
}

func main() {
	fmt.Println("Nearest Square")
	fmt.Println(NearestSq(1))
	fmt.Println(NearestSq(2))
	fmt.Println(NearestSq(10))
	fmt.Println(NearestSq(111))
	fmt.Println(NearestSq(9999))
	fmt.Println(NearestSq(144))
}
