import Producto from "../../interfaces/Producto";
import classes from './CardProducto.module.css';

interface CardProductoProps {
    producto: Producto,
    productoSeleccionado?: (prodSeleccionado: Producto) => void
}

const CardProducto = ({ producto, productoSeleccionado }: CardProductoProps) => {

    const agregarProducto = () => {
        if (productoSeleccionado)
            productoSeleccionado(producto);
    }

    return <div className={classes.card}>
        <h4>{producto.nombre}</h4>
        <img src={producto.imagen} />
        <p>Precio: {producto.precio}</p>
        <button
            className='btn btn-warning'
            onClick={agregarProducto}>
            Agregar
        </button>
    </div>;
}

export default CardProducto;
