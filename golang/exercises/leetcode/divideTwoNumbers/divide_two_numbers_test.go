package main

import (
	"testing"
)

func TestDivideTwoNumbers(t *testing.T) {
	tests := []struct {
		description string
		dividend    int
		divisor     int
		want        int
	}{
		{
			description: "Should return 3 when dividend is 10 and divisor is 3",
			dividend:    10,
			divisor:     3,
			want:        3,
		},
		{
			description: "Should return 2 when dividend is 7 and divisor is 3",
			dividend:    7,
			divisor:     3,
			want:        2,
		},
		{
			description: "Should return 1 when dividend is 1 and divisor is 1",
			dividend:    1,
			divisor:     1,
			want:        1,
		},
		{
			description: "Should return -3 when dividend is -10 and divisor is 3",
			dividend:    -10,
			divisor:     3,
			want:        -3,
		},
		{
			description: "Should return -2 when dividend is -7 and divisor is 3",
			dividend:    -7,
			divisor:     3,
			want:        -2,
		},
		{
			description: "Should return -1 when dividend is -2147483648 and divisor is -1",
			dividend:    -2147483648,
			divisor:     -1,
			want:        2147483647,
		},
	}

	for _, tt := range tests {
		t.Run(tt.description, func(t *testing.T) {
			got := divide(tt.dividend, tt.divisor)

			if got != tt.want {
				t.Errorf("Expected %d, got %d", tt.want, got)
			}
		})
	}
}

func TestGetSignValue(t *testing.T) {
	tests := []struct {
		description string
		dividend    int
		divisor     int
		want        int
	}{
		{
			description: "When divisor is 1 and dividend is 10",
			dividend:    10,
			divisor:     1,
			want:        1,
		},
		{
			description: "When divisor is -1 and dividend is 10",
			dividend:    10,
			divisor:     -1,
			want:        -1,
		},
		{
			description: "When divisor is 1 and dividend is -10",
			dividend:    -10,
			divisor:     1,
			want:        -1,
		},
		{
			description: "When both divisor and dividend are negative",
			dividend:    -10,
			divisor:     -1,
			want:        1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.description, func(t *testing.T) {
			got := getSignValue(tt.dividend, tt.divisor)

			if got != tt.want {
				t.Errorf("Expected %d, got %d", tt.want, got)
			}
		})
	}
}
