package revrot

import "testing"

func TestRevrot(t *testing.T) {
	tests := []struct {
		name string
		word string
		n    int
		want string
	}{
		{
			name: "With a number 1",
			word: "2021",
			n:    1,
			want: "2021",
		},
		{
			name: "With 6",
			word: "123456987654",
			n:    6,
			want: "234561876549",
		},
		{
			name: "With 6 and reverse",
			word: "123456987653",
			n:    6,
			want: "234561356789",
		},
		{
			name: "With 1234",
			word: "1234",
			n:    0,
			want: "",
		},
		{
			name: "With ",
			word: "",
			n:    0,
			want: "",
		},
		{
			name: "With 1234",
			word: "1234",
			n:    5,
			want: "",
		},
		{
			name: "With 733049910872815764",
			word: "733049910872815764",
			n:    5,
			want: "330479108928157",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := Revrot(tt.word, tt.n)

			if got != tt.want {
				t.Errorf("Expected %s, got %s", tt.want, got)
			}
		})
	}
}

func LeapYear(year int) bool {
	return false
}
