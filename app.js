// Clase para los objetos del producto
class Product
{
    constructor( name, price, year)
    {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
// Clase para poder interactuar con el HTML
class UI
{
    constructor()
    {
        addProduct()
        {
            
        }

        deleteProduct()
        {

        }

        showMessage()
        {

        }
    }
}
// DOM Events

document.getElementById('product-form')
    .addEventListener('submit',function(e){
        //Capturaremos los datos del formulario
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year =document.getElementById('year').value;
        
        const product = new Product(name,price,year)

        //Cancelamos la actualizacion de la pagina
        e.preventDefault();
});