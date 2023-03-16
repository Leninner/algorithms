package main

type Student struct {
	name string
	age  int
	rol  string
}

type StudentActions interface {
	Study()
	Play()
}

func main() {
	student := Student{name: "John", age: 20, rol: "student"}
	studentDirection := StudentActions(&student)
	studentDirection.Study()
	studentDirection.Play()
}

func (s *Student) Study() {
	println("I'm studying")
}

func (s *Student) Play() {
	println("I'm playing")
}
