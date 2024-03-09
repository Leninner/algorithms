// Link of the problem: https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/go
package revrot

import (
	"strings"
)

func Revrot(s string, n int) string {
	if n == 0 || len(s) == 0 || n > len(s) {
		return ""
	}

	chunks := make([]string, 0)

	for i := 0; i < len(s); i += n {
		if i+n > len(s) {
			break
		}

		subString := s[i : i+n]

		isDivisibleByTwo := sumOfCubes(subString)%2 == 0

		if isDivisibleByTwo {
			chunks = append(chunks, reverseString(subString))
		} else {
			chunks = append(chunks, rotateByOne(subString))
		}
	}

	return strings.Join(chunks, "")
}

func rotateByOne(s string) string {
	return s[1:] + string(s[0])
}

func reverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func sumOfCubes(s string) int {
	sum := 0
	for _, r := range s {
		sum += int(r-'0') * int(r-'0') * int(r-'0')
	}
	return sum
}
