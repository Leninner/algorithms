package main

import "testing"

func TestIntegerToRoman(t *testing.T) {
	tests := []struct {
		name     string
		input    int
		expected string
	}{
		{"Test case 1", 3, "III"},
		{"Test case 2", 4, "IV"},
		{"Test case 3", 9, "IX"},
		{"Test case 4", 58, "LVIII"},
		{"Test case 5", 1994, "MCMXCIV"},
		{"Test case 6", 3999, "MMMCMXCIX"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := IntegerToRoman(tt.input)

			if result != tt.expected {
				t.Errorf("got %s, want %s", result, tt.expected)
			}
		})
	}
}
