package main

import (
	"fmt"
	"strconv"
)

type Car struct {
	price            float32
	color            string
	brand            string
	dateOfProduction string
	dateOfPurchase   string
	seats            int
	client           string
	plate            string
}

type ICar interface {
	accelerate()
	turnOn()
	turnOff()
	startTrip()
}

func main() {
	mazda := Car{
		price:            18000,
		color:            "black",
		brand:            "Mazda",
		dateOfProduction: "2013/07/03",
		dateOfPurchase:   "2014/03/03",
		seats:            5,
		client:           "Roberto Firmino",
		plate:            "WDF-2020",
	}

	volkswagen := Car{
		price:            25600,
		color:            "white",
		brand:            "Volkswagen",
		dateOfProduction: "2001/5/6",
		dateOfPurchase:   "2006/4/8",
		seats:            11557755,
		client:           "Pepe Manzanas",
		plate:            "WTF-2020",
	}

	bmw := Car{
		price:            159990.20,
		color:            "black",
		brand:            "BMW",
		dateOfProduction: "2009/08/31",
		dateOfPurchase:   "2009/08/31",
		seats:            6,
		client:           "Pedro Leon",
		plate:            "gol-010",
	}

	printInformation(mazda)
	printInformation(volkswagen)
	printInformation(bmw)
}

func printInformation(object Car) {
	fmt.Println("Marca: " + object.brand)
	fmt.Println("Color: " + object.color)
	fmt.Println("Precio: " + strconv.FormatFloat(float64(object.price), 'f', 2, 32))
	fmt.Println("Fecha de fabricación: " + object.dateOfProduction)
	fmt.Println("Fecha de compra: " + object.dateOfPurchase)
	fmt.Println("Asientos: " + strconv.Itoa(object.seats))
	fmt.Println("Cliente: " + object.client)
	fmt.Println("Placa: " + object.plate)
	fmt.Println()
}
