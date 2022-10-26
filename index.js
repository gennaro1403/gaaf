//java script con todo
alert('nos encontramos en construccion, en breve quedara listo!')
let producto = parseInt(prompt('escoge tu producto 1.audifonos - 2.cargador'))
let totalCompra = 0
let decision
//arreglar producto
const productosArray = []
//clase de producto
class NewProduct{
}
const audifonos = new NewProduct(1,'audifonos',1500);
productosArray.push(audifonos);
const cargador = new NewProduct(2,'cargador',900);
productosArray.push(cargador);
console.log(productosArray)
