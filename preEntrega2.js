
// PAGINA DE UNA CERVECERIA ARTESANAL, EN LA QUE EL USUARIO DEBE SER MAYOR DE 18 AŃOS PARA ACCEDER 
// LA PAGINA TIENE UNA SECCION EN DONDE PUEDE COMPRAR LOS PRODUCTOS DE LA MISMA

let age = parseInt(prompt('BIENVENIDO\nIngrese su edad, por favor.\nSi desea salir, ingrese 0.'));
if (age === 0) {
    alert('Gracias por visitarnos, vuelve pronto');
} else if (age < 18) {
    alert('Debes ser mayor de edad para visitarnos.');
    console.log('**El usuario es menor de edad, no puede comprar nuestros productos.**');
}
else {
    alert("BIENVENIDO A CERVECERIA ITO\nDisfruta de la cerveza con mayor calidad de la región");






    //DEFINIR LISTA DE PRODUCTOS
    let products = [
        {
            name: "Frankie",
            price: 55,
            beerStyle: "Stout",
            abv: "5.7%"
        },
        {
            name: "Mostro",
            price: 65,
            beerStyle: "IPA",
            abv: "5.7%"
        },
        {
            name: "The Ripper",
            price: 60,
            beerStyle: "English Strong Ale",
            abv: "5.7%"
        },

    ];
    //FUNCION PARA MOSTRAR LISTA DE COMPRAS
    function listProducts() {
        console.log("** ESTOS SON NUESTRO PRODUCTOS **");
        for (let i = 0; i < products.length; i++) {
            console.log(`${i + 1}. ${products[i].name} "Estilo:"  ${products[i].beerStyle} ABV:  ${products[i].abv} Precio: $ ${products[i].price}`);
        }
    }

    //CARRITO DE COMPRAS 


    let wishToBuy = confirm('¿Deseas compara nuestras cervezas?')
    if (wishToBuy === false) {
        alert('Gracias por visitarnos!')

    }
    function buyBeer() {
        // DEFINIMOS EL CARRITO
        let cart = [];
        //DEFINIMOS ELEMENTOS A COMPRAR
        let itemToBuy;
        let productIndex;

        //ARMADO DE CARRITO DE COMPRA
        while (itemToBuy !== "0") {
            listProducts();
            console.log("Gracias por visitarnos.");
            itemToBuy = prompt("Selecciona la cerveza que deseas comprar:\n 1-Frankie\n 2-Mostro\n 3-The Ripper\n 0-Salir");

            if (itemToBuy !== "0") {
                productIndex = Number(itemToBuy) - 1;
            }

            if (productIndex >= 0 && productIndex < products.length) {
                let qty = Number(prompt(`¿Cuántos ${products[productIndex].name} quieres comprar?`));
                let product = {
                    ...products[productIndex],
                    quantity: qty
                };
                cart.push(product);
                alert(`Producto añadido al carrito: ${product.name}`);
                console.log(`Producto añadido al carrito: ${product.name}`);

                alert(`La cantidad que compraste: ${product.qty}`);
                console.log(`La cantidad que compraste: ${product.qty}`);
            } else {
                alert("Esa opción no es válida. Inténtalo nuevamente.")
            }

            //ANUNCIAMOS AL USUARIO EL RESUMEN DE COMPRA
            console.log("** RESUMEN DE COMPRA **");
            let total = 0;

            for (let i = 0; i < cart.length; i++) {
                let product = cart[i];
                total += product.price * product.quantity;
            }
            alert(`Total a pagar : $ ${total.toFixed(2)}`);
            console.log(`Total a pagar : $ ${total.toFixed(2)}`)
        }
    }
    buyBeer();
}


