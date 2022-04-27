import React, { Fragment } from "react";

import HeaderProductos from './header-productos'
import TableProductos from './table-productos'
import Actualizacion from './actualizacion'

export const Body = props => {
    const { data, editar, actualizar, functionEliminarItem, functionEditar,
        functionGuardar } = props

    const functionBody = () => {
        let htmlBody = {}
        switch ( true ) {
            case editar:
                htmlBody = ( <Actualizacion
                    functionGuardar = { functionGuardar }
                /> )
            break;
            case actualizar:
            break;
            default:
                htmlBody = (
                    <Fragment>
                        <HeaderProductos/>
                        <TableProductos
                            data = { data }
                            functionEliminarItem = { functionEliminarItem }
                            functionEditar = { functionEditar }
                        />
                    </Fragment>
                )
                break;
        }
        return htmlBody
    }

    return(
        <div className="body">
            { functionBody() }
        </div>
    )

}