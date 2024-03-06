interface PedidoConfirmadoProps {
    direccion: string,
    numero : string,
    detalles : string
}

export const PedidoConfirmado = ({
    direccion,
    numero,
    detalles
} : PedidoConfirmadoProps) => {
    return <div className="info-pedido-confirmado">
        <p>
            PEDIDO #{numero} REALIZADO EXITOSAMENTE
        </p>
        <p>
            {direccion}
        </p>
        <p>
            {detalles}
        </p>
    </div>
};

export default PedidoConfirmado;