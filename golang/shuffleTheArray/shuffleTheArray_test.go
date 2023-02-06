package shufflethearray

import "testing"

func testShuffle(t *testing.T, nums []int, n int, expected []int) {
	result := shuffle(nums, n)
	if len(result) != len(expected) {
		t.Errorf("shuffle was incorrect, got: %v, want: %v.", result, expected)
	}
	for i := 0; i < len(result); i++ {
		if result[i] != expected[i] {
			t.Errorf("shuffle was incorrect, got: %v, want: %v.", result, expected)
			break
		}
	}
}

func TestShuffle(t *testing.T) {
	testShuffle(t, []int{2, 5, 1, 3, 4, 7}, 3, []int{2, 3, 5, 4, 1, 7})
	testShuffle(t, []int{1, 2, 3, 4, 4, 3, 2, 1}, 4, []int{1, 4, 2, 3, 3, 2, 4, 1})
	testShuffle(t, []int{1, 1, 2, 2}, 2, []int{1, 2, 1, 2})
}
