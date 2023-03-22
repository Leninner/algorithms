package main

import "fmt"

type Mascota interface {
	Comer()
	Dormir()
}

type Perro struct {
	Nombre string
}

func (p *Perro) Comer() {
	fmt.Printf("%s está comiendo\n", p.Nombre)
}

func (p *Perro) Dormir() {
	fmt.Printf("%s está durmiendo\n", p.Nombre)
}

func main() {
	perro := Perro{Nombre: "Firulais"}

	var miMascota Mascota = &perro
	miMascota.Comer()
	miMascota.Dormir()
}
