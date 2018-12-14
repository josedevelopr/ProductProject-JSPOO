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
        addProduct(product)
        {
            const productList = document.getElementById('product-list');
            // Creamos el element para poder enviar el listado de productos que se agregaran
            const element = document.createElement('div');
            //Ahora creamos lo que se imprimira en el HTML, en donde se mostrara el listado de productList
            element.innerHTML = 
            `
            <div class="card text-center mb-4">
                <div>
                    <strong>Product Name</strong>:${product.name}
                    <strong>Product Price</strong>:${product.price}
                    <strong>Product Year</strong>:${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
            `;
            //Al listado le añadiamos un objeto hijo
            productList.appendChild(element);
        }

        resetForm()
        {
            //Evento para limpiar los campos del formulario
            document.getElementById('product-form').reset();
        }

        deleteProduct(element)
        {
            if(element.name==='delete')
            {
                //Con el 'parentElement'-> accedemos al elemento padre
                //En este caso como se quiere eliminar el div completo,
                //se debe subir 3 niveles del padre para eliminar el div completo del card
                element.parentElement.parentElement.parentElement.remove()
            }
        }

        showMessage()
        {

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

        const ui = new UI();
        ui.addProduct(product);

       ui.resetForm();

        //Cancelamos la actualizacion de la pagina
        e.preventDefault();
});

document.getElementById('product-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
});
