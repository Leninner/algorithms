package main

type Peluche struct {
	color            string
	price            float32
	client           string
	dateOfProduction string
	dateOfPurchase   string
	size             string
	brand            string
}

type IPeluche interface {
	moveJoints()
}

func main() {
	Jugueton := Peluche{
		color:            "browm",
		price:            23,
		client:           "Daniel Espejo",
		dateOfProduction: "2021/08/26",
		dateOfPurchase:   "2021/12/25",
		size:             "26cmx30cm",
		brand:            "Jugueton",
	}

	Lego := Peluche{
		color:            "red",
		price:            56,
		client:           "Zoila Cerda",
		dateOfProduction: "2022/09/25",
		dateOfPurchase:   "2022/12/25",
		size:             "90cmx50cm",
		brand:            "Lego",
	}

	print(Jugueton, Lego)
}
