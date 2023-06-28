import Producto from "../interfaces/Producto";

interface ComandaProps {
    productos: Producto[]
}

const Comanda = ({ productos }: ComandaProps) => {

    const calcularTotal = () => {
        let total = 0;
        for (let producto of productos) {
            total += producto.precio;
        }
        return total;
    }

    const calcularTotalV2 = () => productos.reduce((total, producto) => total + producto.precio, 0);

    return <div>
        <h3>TOTAL: {calcularTotalV2()}€</h3>
        <ul className='list-group'>
            {productos.map(prod => (
                <li className="list-group-item">
                    {prod.nombre} x {prod.precio}€
                </li>
            ))}
        </ul>
    </div>;
}

export default Comanda;