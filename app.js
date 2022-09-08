const inputNombre = document.querySelector("#NombreIgreso")
const inputCantidad = document.querySelector("#cantidadIngreso")
const inputKg = document.querySelector("#pesajeIngreso")
const inputCosto = document.querySelector("#costoIngreso")
const inputPlu = document.querySelector("#PLUIngreso")
const campos = document.querySelector("input")
const btnCargar = document.querySelector("#cargar")
const btnGuardar = document.querySelector("#guarda")
const btnGuardados = document.querySelector("#guardados")
const btnEliminar = document.querySelector("#eliminar")
const Resto = "https://631a4493dc236c0b1edb07ed.mockapi.io/productos"
const Productos = []


const Codigos = [{ nombre: "Banana", plu: 101 },
{ nombre: "Pera", plu: 102 }, //base de codigos
{ nombre: "Anana", plu: 103 },
{ nombre: "Manzana", plu: 104 },
{ nombre: "Naranja", plu: 104 },]




const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };







class producto{
    constructor(nombre, cantidad, kg, costo, plu ) {
        this.nombre = nombre
        this.cantidad = cantidad   
        this.kg = kg
        this.costo = costo 
        this.plu= plu
    }
}

const agregarProd  = () => { 
    let nombre = inputNombre
    let cantidad = inputCantidad
    let kg = inputKg
    let costo = inputCosto
    let plu = inputPlu
    let  nuevoProducto = new producto(nombre,cantidad,kg,costo,plu);
    Productos.push(nuevoProducto)
    console.log(nuevoProducto.nombre)
}

const cargarTabla = () => {
    const cuerpo = document.querySelector("#cuerpo")
        Productos.forEach( producto => {
        cuerpo.innerHTML +=`<tr>
                                <td> ${producto.nombre.value}</td>
                                <td> ${producto.cantidad.value} </td>
                                <td> ${producto.kg.value} </td>
                                <td> ${producto.costo.value} </td>
                                <td> ${producto.plu.value} </td>
                            </tr>`
    })
}

const StockDia = []



const armarTable = () => {
    for (const objeto of mostrarGuardados)
    StockDia.push(new prodResto(objeto));
    const cuerpo = document.querySelector("#cuerpo")
        StockDia.forEach( objeto => {
        cuerpo.innerHTML +=`<tr>
                                <td> ${objeto.nombre}</td>
                                <td> ${objeto.cantidad} </td>
                                <td> ${objeto.kg} </td>
                                <td> ${objeto.costo} </td>
                                <td> ${objeto.plu} </td>
                            </tr>`
    })
    
}
class prodResto{
    constructor(obj) {
        this.nombre = obj.nombre.toUpperCase();
        this.cantidad = parseFloat(obj.cantidad); 
        this.kg = parseFloat(obj.kg); 
        this.costo = parseFloat(obj.costo); 
        this.plu = parseFloat(obj.plu); 
    }
}


const peticionFetch = async ()=> {
    const response = await fetch(URL)
    const data = await response.json()
          return data }



const mostrarGuardados = JSON.parse(localStorage.getItem("RestoProductos"));
const mostrarStock = JSON.parse(peticionFetch);
btnCargar.addEventListener("click", () => {agregarProd(); cargarTabla(); console.log("Boton apretado")});
btnGuardados.addEventListener("click",()=> {armarTable() ;console.log("Boton apretado")} )
btnGuardar.addEventListener("click", () => {Swal.fire({
    title: '¿Desea agregar estos productos?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, deseo guardarlo'
  }).then((result) => {
    if (result.isConfirmed) {
        guardarLocal("stockDia", JSON.stringify(Productos));
        console.log("Boton apretado");
        Eliminar()
      Swal.fire(
        '¡Guardado!',
        'Los productos han sido guardados correctamente.',
        'success'
      )
    }
  })})

const Eliminar = () => {cuerpo.remove()}



  
  
 
