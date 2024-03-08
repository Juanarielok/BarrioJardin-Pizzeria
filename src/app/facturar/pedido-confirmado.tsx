interface PedidoConfirmadoProps {
    direccion: string,
    numero : string,
    detalles : string
    total: number
    metodo: string
}

export const PedidoConfirmado = ({
    direccion,
    numero,
    detalles,
    total,
    metodo
} : PedidoConfirmadoProps) => {
    return <div className="info-pedido-confirmado">
        <p>
            TU PEDIDO NUMERO #{numero} FUE REALIZADO EXITOSAMENTE
        </p>

        <p>
      Metodo de pago: {metodo}
        </p>

        <p>
      Domicilio: {direccion}
        </p>
        <p>
        Detalles: {detalles}
        </p>
        <p>
         TOTAL: $ {total}
        </p>
    </div>
};

export default PedidoConfirmado;