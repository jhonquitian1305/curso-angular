import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  arrComida: Producto[];
  arrBebida: Producto[];

  productosSeleccionados: Producto[];

  constructor() {
    this.productosSeleccionados = [];
    this.arrComida = [
      new Producto('Cocido', 'https://t2.uc.ltmcdn.com/es/posts/2/3/7/como_hacer_cocido_madrileno_51732_orig.jpg' , 10.50),
      new Producto('Paella', 'https://www.hola.com/imagenes/cocina/recetas/20200917175530/paella-valenciana-clasica/0-866-670/paella-age-m.jpg', 15.50),
      new Producto('Cachopo', 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/10/17/5e99825cb4c58.jpeg', 13.25),
      new Producto('Pizza', 'https://www.eluniverso.com/resizer/5N9j1EK0-8MMn30GXOMaL_y6GMI=/809x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/M7ROUAC34ZCI7AU3WN7GF4TAUY.jpg', 17.30),
      new Producto('Pasta', 'https://www.lavanguardia.com/files/article_main_microformat/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418-0.jpeg', 21.45),
      new Producto('Hamburguesa', 'https://www.alqueria.com.co/sites/default/files/styles/1327_612/public/hamburguesa-con-amigos-y-salsa-de-champinones_0.jpg?h=2dfa7a18&itok=hLxehdIa', 19.25)
    ];

    this.arrBebida = [
      new Producto('Coca Cola', 'https://coca-colafemsa.com/wp-content/uploads/2020/02/1-40.png', 5.35),
      new Producto('Fanta', 'https://m.media-amazon.com/images/I/71st8HfMjXL._SX385_.jpg', 4.10),
      new Producto('Cerveza', 'https://toctocdelivery.co/wp-content/uploads/2019/04/aguila-cerveza.png', 7.25),
      new Producto('Agua', 'https://cdn2.totalcode.net/homesentry/product-zoom/es/agua--cristal-600ml-1.webp', 6.15)
    ];
  }

  onProductoSeleccionado($event: any){
    // this.productosSeleccionados.push($event);
    const productoEncontrado = this.productosSeleccionados.find(producto => producto.nombre === $event.nombre);

    if(productoEncontrado){
      productoEncontrado.cantidad++;
    }else{
      $event.cantidad = 1;
      this.productosSeleccionados.push($event);
    }
    console.log(this.productosSeleccionados);
  }

}
