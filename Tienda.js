let carrito=[];
let total=0;
//Se crea un bucle para que el usuario ingrese los productos la carrito segun su ID
function addcarrito(id,price)
{
    Xi=productos[id];
    carrito.push(Xi);
    total=total+price;
}

//Creo la funcion constructora  sensor para poder crear objetos en mi caso son sensores industriales
function Sensor(Producto,tipo,modelo,costo) 
{
    this.Producto=Producto;
    this.tipo=tipo;
    this.modelo=modelo;
    this.costo=costo;
}
// Se crea un aproximado de 5 sensores OBJETOS para poder usarlos en la pagina de tienda 
const sensor1 = new Sensor(0,"Capacitivo","Siemens",500);
const sensor2 = new Sensor(1,"Inductivo","ABB",250);
const sensor3 = new Sensor(2,"Presion","Schneider",760);
const sensor4 = new Sensor(3,"Resistivo","ABB",150);
const sensor5 = new Sensor(4,"Temperatura","ABB",125);

const productos=[sensor1,sensor2,sensor3,sensor4,sensor5];

// Se crea el array carrito donde el usuario escogera que poner al carro de compras



//Funcion para ver el Carritousando JSON para poder visualizar
function verCarrito()
{
for (let i=0;i<carrito.length;i++)
{ 
    console.log(carrito[i]);}
window.alert('Tus productos son: \n' + JSON.stringify(carrito));}


//Funcion para ver el total a pagar
function pay()
{
    window.alert('Su compra total es de ' + total +' USD');
}


