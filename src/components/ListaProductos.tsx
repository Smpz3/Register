import styled from "styled-components";
import Producto from "../interfaces/Producto";
import CardProducto from "./CardProducto/CardProducto";

interface ListaProductosProps {
    titulo: string,
    productos: Producto[],
    productoSeleccionado?: (prodSeleccionado: Producto) => void
}

const FlexWrapper = styled.div`
    background-color: lightcyan;
    padding: 20px;
    border: 1px solid dodgerblue;
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const ListaProductos = (
    { titulo, productos, productoSeleccionado }: ListaProductosProps
) => {

    return <div>
        <h2>{titulo}</h2>
        <FlexWrapper>
            {productos.map(prod => (
                <CardProducto
                    producto={prod}
                    productoSeleccionado={productoSeleccionado}
                />
            ))}
        </FlexWrapper>
    </div>;
}

export default ListaProductos;