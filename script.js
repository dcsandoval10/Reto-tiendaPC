const numPC = document.getElementById('compra');

let precioPC = 820000;
let descuento0 = 1640000;
let descuento1 = 3280000;
let descuento2 = 6560000;
let descuento3 = 9840000;


numPC.addEventListener('submit', (e) => {

    e.preventDefault();

    let pcComprado = document.getElementById('pcComprados').value
    let precioFinal = pcComprado *precioPC ;

    if(precioFinal >= descuento0 && precioFinal<=descuento1)
    {
        let porDescuento = 0.15;
        let descuento = porDescuento * precioFinal;
        let precioDescuento = precioFinal-descuento;
        alert ('Su descuento es de el 15%')

        factura1.innerHTML = `
        <h2>Valor de la Compra: <p>${precioFinal}</p></h2>
        <h2>Valor del descuento: <p>${descuento}</p></h2>
        <h2>Valor total: <p>${precioDescuento}</p></h2>
        
        `
    }

    else if ( precioFinal >= descuento1 && precioFinal <= descuento2)
    {
        let porDescuento = 0.25;
        let descuento = porDescuento * precioFinal;
        let precioDescuento = precioFinal-descuento;
        alert ('Su descuento es de el 25%')

        factura1.innerHTML = `
        <h2>Valor de la Compra: <p>${precioFinal}</p></h2>
        <h2>Valor del descuento: <p>${descuento}</p></h2>
        <h2>Valor total: <p>${precioDescuento}</p></h2>        
        `
    }

    else if ( precioFinal >= descuento2 && precioFinal <= descuento3)
    {
        let porDescuento = 0.35;
        let descuento = porDescuento * precioFinal;
        let precioDescuento = precioFinal-descuento;
        alert ('Su descuento es de el 35%')

        factura1.innerHTML = `
        <h2>Valor de la Compra: <p>${precioFinal}</p></h2>
        <h2>Valor del descuento: <p>${descuento}</p></h2>
        <h2>Valor total: <p>${precioDescuento}</p></h2>        
        `
    }
    else
    {
        
        let descuento = 0;
        let precioDescuento = precioFinal-descuento;
        alert ('Su compra no tiene descuento')

        factura1.innerHTML = `
        <h2>Valor de la Compra: <p>${precioFinal}</p></h2>
        <h2>Valor del descuento: <p>${descuento}</p></h2>
        <h2>Valor total: <p>${precioDescuento}</p></h2>        
        `
    }

    


    
})
