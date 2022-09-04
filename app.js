const campos = document.querySelector("input")
const btnCargar = document.querySelectorAll("guarda")
const btnGuardados = document.querySelectorAll("guardados")
const btnEliminar = document.querySelectorAll("eliminar")


const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
const guardarLocal2 = (clave, valor) => { 
    Swal.fire({
        title: '¿Desea guardar los productos?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {

        if (result.isConfirmed) {
            localStorage.setItem(clave, valor)
            Swal.fire({
                title: 'Guardado!',
                icon: 'success',
                text: 'El archivo ha sido guardado'
            })
};





class producto{
    constructor(nombre, cantidad, kg, costo, plu ) {
        this.nombre = nombre
        this.cantidad = cantidad   
        this.kg = kg
        this.costo = costo 
        this.plu= plu
        console.table(producto)
    }
}


const Productos = []
const Resto = [{ nombre: "Banana",  cantidad: 12, kg: 19, costo: 1200, plu: 101 },
            { nombre: "Pera",  cantidad: 10, kg: 14, costo: 2200, plu: 102 },
            { nombre: "Manzana",  cantidad: 2, kg: 18, costo: 700, plu: 103 },
            { nombre: "Anana",  cantidad: 1, kg: 7, costo: 1400, plu: 104 },
]

guardarLocal("RestoProductos", JSON.stringify(Resto));



const btnGuardar = document.getElementById("guarda")


const inputNombre = getElementById("#NombreIgreso")
const inputCantidad = querySelector("#cantidadIngreso")
const inputKg = querySelector("#pesajeIngreso")
const inputCosto = querySelector("#NombreIgreso")
const inputPlu = querySelector("#PLUIngreso")
//todo ok hasta aca

const agregarProducto = ()  =>{
    let nombre= inputNombre
    let cantidad = inputCantidad
    let kg = inputKg
    let costo = inputCosto
    let plu = inputPlu
    let productoNuevo = new producto(nombre,cantidad,kg,costo,plu);
    Productos.push (productoNuevo)
    cargarTabla () 
	
} 
    
    

// todo ok
function cargarTabla() {
            const cuerpo = document.getElementById("cuerpo");
            Productos.forEach(producto => {
                cuerpo.innerHTML += `<tr>
                                <td> ${inputNombre.value}</td>
                                <td> ${inputCantidad.value} </td>
                                <td> ${inputKg.value} </td>
                                <td> ${inputCosto.value} </td>
                                <td> ${inputPlu.value} </td>
                            </tr>`;
            });
}
 

const buscarProductosNombre = () =>
    {let productoQuitar  = prompt("Ingresa el producto:")
    const resultado = Productos.filter(producto => producto.nombre.includes(productoQuitar))
        ;
} 


const cuerpo = document.getElementById("cuerpo")

const mostrarGuardados = JSON.parse(localStorage.getItem("RestoProductos"));


class prodResto{
    constructor(obj) {
        this.nombre = obj.nombre.toUpperCase();
        this.cantidad = parseFloat(obj.cantidad); 
        this.kg = parseFloat(obj.kg); 
        this.costo = parseFloat(obj.costo); 
        this.plu = parseFloat(obj.plu); 
    }
}
const StockDia = []


const campos = document.querySelector("input")
const btnCargar = document.querySelectorAll("guarda")
const btnGuardados = document.querySelectorAll("guardados")
const btnEliminar = document.querySelectorAll("eliminar")


const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
const guardarLocal2 = (clave, valor) => { 
    Swal.fire({
        title: '¿Desea guardar los productos?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {

        if (result.isConfirmed) {
            localStorage.setItem(clave, valor)
            Swal.fire({
                title: 'Guardado!',
                icon: 'success',
                text: 'El archivo ha sido guardado'
            })
};





class producto{
    constructor(nombre, cantidad, kg, costo, plu ) {
        this.nombre = nombre
        this.cantidad = cantidad   
        this.kg = kg
        this.costo = costo 
        this.plu= plu
        console.table(producto)
    }
}


const Productos = []
const Resto = [{ nombre: "Banana",  cantidad: 12, kg: 19, costo: 1200, plu: 101 },
            { nombre: "Pera",  cantidad: 10, kg: 14, costo: 2200, plu: 102 },
            { nombre: "Manzana",  cantidad: 2, kg: 18, costo: 700, plu: 103 },
            { nombre: "Anana",  cantidad: 1, kg: 7, costo: 1400, plu: 104 },
]

guardarLocal("RestoProductos", JSON.stringify(Resto));



const btnGuardar = document.getElementById("guarda")


const inputNombre = document.getElementById("#NombreIgreso")
const inputCantidad = document.querySelector("#cantidadIngreso")
const inputKg = document.querySelector("#pesajeIngreso")
const inputCosto = document.querySelector("#NombreIgreso")
const inputPlu = document.querySelector("#PLUIngreso")
//todo ok hasta aca
function Ranking() {
    let Precio = parseFloat(prompt( "¿Cual es el precio por Kg para el público?" )) 
    RentaProd = MargenBruto(Precio, ValorKilo(KG, Costo) )
    if (RentaProd< 50) {
        return "Renta media"
    } else {
        return "Renta Alta"
    }
}



function ValorKilo(Num1, num2) {
    return num2 / Num1
}   

function RentabilidadNeta(Valor1, Valor2) {
    return Valor1 - Valor2
}
function MargenBruto(a, b) {
    return (((a * b) / 100), "%")
}

function GananciaProductoNeta ($,) {  
    MargenBruto(ValorKilo , $)
    console.log()
}

function agregarProducto() {
    let nombre= inputNombre
    let cantidad = inputCantidad
    let kg = inputKg
    let costo = inputCosto
    let plu = inputPlu
    let productoNuevo = new producto(nombre,cantidad,kg,costo,plu);
    Productos.push (productoNuevo)
    cargarTabla () 
    
}
// todo ok
const cargarTabla = () => {
    const cuerpo = document.getElementById("cuerpo")
        Productos.forEach( producto => {
        cuerpo.innerHTML +=`<tr>
                                <td> ${inputNombre.value}</td>
                                <td> ${inputCantidad.value} </td>
                                <td> ${inputKg.value} </td>
                                <td> ${inputCosto.value} </td>
                                <td> ${inputPlu.value} </td>
                            </tr>`
    })
}
 

function buscarProductoPLU() {
    let prodPLU = prompt("Ingresa el plu a buscar:")
        const resultado = Productos.find(producto => producto.plu === prodPLU)
         console.table(resultado)
}

function buscarProductosNombre() {
    let productoQuitar  = prompt("Ingresa el producto:")
    const resultado = Productos.filter(producto => producto.nombre.includes(productoQuitar))
     console.table(resultado)
    }


const cuerpo = document.getElementById("cuerpo")

const mostrarGuardados = JSON.parse(localStorage.getItem("RestoProductos"));


class prodResto{
    constructor(obj) {
        this.nombre = obj.nombre.toUpperCase();
        this.cantidad = parseFloat(obj.cantidad); 
        this.kg = parseFloat(obj.kg); 
        this.costo = parseFloat(obj.costo); 
        this.plu = parseFloat(obj.plu); 
    }
}
const StockDia = []


btnCargar.addEventListener("click", agregarProducto); 
btnGuardar.addEventListener("click", guardarLocal2("ingresoDia", JSON.stringify(Productos)))
