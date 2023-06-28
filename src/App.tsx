import { useState } from 'react';
import './App.css';
import CardProducto from './components/CardProducto/CardProducto';
import ListaProductos from './components/ListaProductos';
import Producto from './interfaces/Producto';
import Comanda from './components/Comanda';

const arrComida: Producto[] = [
  { nombre: 'Paella', imagen: 'https://nomen.es/wp-content/uploads/2020/09/trucos-paella-perfecta.jpg', precio: 9.90, stock: 10, disponible: true },
  { nombre: 'Cocido', imagen: 'https://i.blogs.es/d67ec6/cocido_madrileno-copia/450_1000.jpg', precio: 11, stock: 10, disponible: true },
  { nombre: 'Macarrones con tomate', imagen: 'https://www.rebanando.com/uploads/media/maxresdefault-jpg-19.jpeg', precio: 6.50, stock: 10, disponible: true },
  { nombre: 'Cazón', imagen: 'https://lacocinademasito.com/wp-content/uploads/2019/12/Cazon-en-adobo-2.jpg', precio: 7.90, stock: 10, disponible: true },
];

const arrBebida: Producto[] = [
  { nombre: 'Coca-cola', imagen: 'https://www.topdrinks.es/pub/media/catalog/product/1/9/199.jpg', precio: 2.50, stock: 30, disponible: true },
  { nombre: 'Fanta Naranja', imagen: 'https://www.supereko.net/media/catalog/product/cache/1/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/l/a/lata_330ml_fanta_go_naranja.jpg', precio: 2.23, stock: 30, disponible: true },
  { nombre: 'Cerveza', imagen: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/08/11/6113832151c5c.jpeg', precio: 1.80, stock: 30, disponible: true },
  { nombre: 'Agua', imagen: 'https://folder.es/41611-large_default/caja-de-35-botellas-de-agua-nestle-aquarel-033l.jpg', precio: 1.20, stock: 30, disponible: true },
];

function App() {

  const [arrComanda, setArrComanda] = useState<Producto[]>([]);

  const onProductoSeleccionado = (prodSeleccionado: Producto) => {
    setArrComanda([
      ...arrComanda, prodSeleccionado
    ]);
  }

  return (
    <div className="container">
      <div className='row'>
        <div className='col-8'>
          <ListaProductos
            titulo='Comida'
            productos={arrComida}
            productoSeleccionado={onProductoSeleccionado}
          />
          <ListaProductos
            titulo='Bebida'
            productos={arrBebida}
            productoSeleccionado={onProductoSeleccionado}
          />
        </div>
        <div className='col-4'>
          <Comanda
            productos={arrComanda}
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;