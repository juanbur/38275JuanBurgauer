// let productos_en_heladera = ['leche', 'huevos', 'cafe', 'manteca', 'soda']
// let nuevos_productos_en_freezer = ['mayonesa', 'hojas verdes', 'tomates', 'zanahoria', 'tofu']
// let otros_productos = ['bananas', 'maizena', 'harina', 'yerba', 'ddl']


// function clasificarProductos () {
//     let producto_ingresado = prompt('Ingresa el producto')

//     // recorre la lista de productos en la heladera y compara
//     productos_en_heladera.forEach(producto => {
//         if (producto_ingresado === producto) {
//             console.log('entre al if de helader')
//             console.log(`producto guardado en la heladera: ${ producto }`)
//             return
//         } 
//     })

//     nuevos_productos_en_freezer.forEach(producto => {
//         if (producto_ingresado === producto) {
//             console.log('entre al if de freezer')
//             console.log(`producto guardado en el freezer: ${ producto }`)
//             return
//         } 
//     })

// }


//programa escalable para que el personal de un restaurant acomode el stock recibido adecuadamente.

// let productos_en_heladera = ['leche vegetal', 'huevos', 'harina 0000', 'cafe', 'canela']
// let productos_en_freezer = ['helado', 'menta', 'salsa tomate', 'hielo', 'jugo naranja']
// let otros_productos = ['manteca', 'tortas', 'mermelada', 'ddl', 'frutas']

const switchExample = () => {
    let prod_proveedor = prompt('Ha llegado el proveedor Mediterranok99, Ingresa el producto:\n \nharina almendra \ncoco rayado \narandanos secos \nte matcha')
    let kilos = prompt('Ingresa los kilos')

    switch (prod_proveedor) {
        case 'harina almendra':
            if(kilos > 3){
                console.log('Estanteria #123')
            } else {
                console.log('Productos de menos de 3 kg. dejarlos en barra')
            }
            console.log('comentario: mantener producto bien cerrado')
            break;

        case 'coco rayado':
            if(kilos > 3){
                console.log('Estanteria #021')
            } else {
                console.log('Productos de menos de 3 kg. dejarlos en barra')
            }
            console.log('comentario: mantener producto bien cerrado')
            break;

            case 'arandanos secos':
                if(kilos > 3){
                    console.log('Estanteria #021')
                } else {
                    console.log('Productos de menos de 3 kg. dejarlos en barra')
                }
                console.log('comentario: mantener producto en un lugar fresco y sin luz solar')
                break;

                case 'te matcha':
                    if(kilos > 3){
                        console.log('Estanteria #025')
                    } else {
                        console.log('Productos de menos de 3 kg. dejarlos en barra')
                    }
                    console.log('comentario: Ubicarlo abajo a la derecha')
                    break;

                default:
                    console.log('Producto no especificado, devolver al proveedor')
                    break;
    }
}

switchExample()