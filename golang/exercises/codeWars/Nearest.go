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
