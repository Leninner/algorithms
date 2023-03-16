package main

// struct is the way to declare a custom type in Go

type Student struct {
	name string
	age  int
}

func NewStudent(name string, age int) *Student {
	return &Student{name, age}
}

/**
*Student is a pointer to a Student struct
&Student is a pointer to a Student struct

La diferencia entre `*Student` y `&Student` en Go es que `*Student` es un tipo de dato que representa un puntero a un objeto de tipo Student, mientras que `&Student` es el operador utilizado para obtener la dirección de memoria de un objeto de tipo Student.

Es decir, `*Student` es utilizado para declarar una variable que es un puntero a un objeto de tipo Student, mientras que &Student es utilizado para obtener la dirección de memoria de un objeto de tipo Student.

Por ejemplo, si se tiene una variable s de tipo Student, se puede obtener su dirección de memoria utilizando el operador & de la siguiente manera:

s := Student{"Juan", 25}
address := &s

En este caso, &s es la dirección de memoria de la variable s de tipo Student.

Por otro lado, si se tiene una función que retorna un puntero a un objeto de tipo Student, se puede declarar su tipo de retorno como *Student de la siguiente manera:

func getStudent() *Student {
    s := Student{"Maria", 28}
    return &s
}

En este caso, *Student es el tipo de dato utilizado para indicar que la función retorna un puntero a un objeto de tipo Student. En la última línea, se utiliza el operador & para obtener la dirección de memoria de la variable s de tipo Student, y luego se retorna como un puntero de tipo *Student.
*/

// instantiate a student
func main() {
	student := NewStudent("John", 21)
	println(student.name, student.age)
}

func (s Student) printInfo() {
	println(s.name, s.age)
}
