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
                element.parentElement.parentElement.parentElement.remove();

                //mostrando mensaje
                this.showMessage('Product Deleted Successfully','info');
            }
        }

        //Recibimos dos parametros 
        //message -> el mensaje que queramos mostrar
        //cssClass-> para darle un color al mensaje
        showMessage(message, cssClass)
        {
            // Creamos un elemento div para poder poner dentro el mensaje que queramos mostrar
            const div = document.createElement('div');
            //Agregamos clases al div para que tenga un color, segun el que mandemos
            div.className = `alert alert-${cssClass} mt-4`;
            //Insertamos dentro el div, el mensaje a mostrar
            div.appendChild(document.createTextNode(message));
            //Mostraremos ahora el mensaje en el DOM
            const container = document.querySelector('.container');
            const app = document.querySelector('#App');
            //insertamos entonces el div, antes del app
            container.insertBefore(div , app);

            setTimeout(function(){
                document.querySelector('.alert').remove();
            }, 3000);

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

        if(name===''||price ===''||year ==='')
        {
            return ui.showMessage('Please complete all the inputs','danger');
        }

        ui.addProduct(product);

        ui.resetForm();
        //mostrando mensaje
        ui.showMessage('Product Added Successfully','success');
        //Cancelamos la actualizacion de la pagina
        e.preventDefault();
});

document.getElementById('product-list').addEventListener('click',function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);

    
});
