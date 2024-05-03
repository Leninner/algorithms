package main

import (
	"reflect"
	"testing"
)

func TestSelfDivideNumber(t *testing.T) {
	result := selfDividingNumbers(1, 22)
	expected := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22}

	if !reflect.DeepEqual(result, expected) {
		t.Errorf("Expected %v but got %v", expected, result)
	}
}
