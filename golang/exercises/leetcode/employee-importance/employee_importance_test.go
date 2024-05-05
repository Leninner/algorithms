package main

import "testing"

func TestEmployeeImportance(t *testing.T) {
	tests := []struct {
		name     string
		input    []*Employee
		id       int
		expected int
	}{
		{"When the employee don't has subordinates", []*Employee{
			{1, 5, []int{}},
		}, 1, 5},
		{"When the employee has subordinates", []*Employee{
			{1, 5, []int{2, 3}},
			{2, 3, []int{}},
			{3, 3, []int{}},
		}, 1, 11},
		{"When the employee has hierarchical subordinates", []*Employee{
			{1, 5, []int{2}},
			{2, 3, []int{}},
		}, 2, 3},
		{"When the employee has negative importance", []*Employee{
			{1, 2, []int{5}},
			{5, -3, []int{}},
		}, 5, -3},
		{"When the employee has negative and hierarchical subordinates", []*Employee{
			{1, -78, []int{8, 7, 2}},
			{8, 78, []int{6}},
			{6, 7, []int{}},
			{7, 2, []int{}},
			{2, 2, []int{}},
		}, 1, 11},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := EmployeeImportance(tt.input, tt.id)

			if result != tt.expected {
				t.Errorf("got %d, want %d", result, tt.expected)
			}
		})
	}
}
