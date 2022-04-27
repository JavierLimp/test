import React, { Fragment } from "react";

import pencil from '../../assets/img/awesome-pencil-alt.svg'
import trash from '../../assets/img/awesome-trash-alt.svg'

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import IconButton from '@mui/material/IconButton';

import Paper from '@mui/material/Paper';

export const TableProductos = props =>{

    const { data, functionEliminarItem, functionEditar } = props

    const TITLE_HEADER = {
        NOMBRE     : 'nombre',
        VACIO      : '',
        CATEGORIA  : 'Categoría',
        PRECIO     : 'Precio',
        CANTIDAD   : 'Cantidad',
        INVENTARIO : 'Inventario',
        ACCION     : 'Acción'
    }

    const mapHeader = () => (
        Object.values( TITLE_HEADER ).map( ( item, index ) => (
            <TableCell key={`${index}-${item}`}>{ item }</TableCell>
        ))
    )

    const mapBody = () => (
        Object.values( data ).map( ( item, index ) => {
            return (
                <TableRow
                    key={`${index}-${item.id}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell key={`${index}-${item.id}-${item.nombre}`}>{ item.nombre }</TableCell>
                    <TableCell key={`${index}-${item.id}-${item.zapatos}`}>{ item.zapatos    }</TableCell>
                    <TableCell key={`${index}-${item.id}-${item.categoria}`}>{ item.categoria  }</TableCell>
                    <TableCell key={`${index}-${item.id}-${item.precio}`}>{ `$${item.precio}`     }</TableCell>
                    <TableCell key={`${index}-${item.id}-${item.cantidad}`}>{ item.cantidad   }</TableCell>
                    <TableCell key={`${index}-${item.id}-${item.inventario}`}>{ item.inventario }</TableCell>
                    <TableCell key={`${index}-${item.id}`}>
                    <IconButton
                        color="primary"
                        aria-label="edit"
                        component="span"
                        onClick={ () => functionEditar( item.id ) }
                    >
                        <img
                            src={ pencil }
                            alt={ pencil }
                            loading="lazy"
                        />
                    </IconButton>
                    <IconButton
                        color="primary"
                        aria-label="edit"
                        component="span"
                        onClick={ () => functionEliminarItem( item.id ) }
                    >
                        <img
                            src={ trash }
                            alt={ trash }
                            loading="lazy"
                        />
                    </IconButton>
                    </TableCell>
                </TableRow>
            )
        })
    )

    return(
        <Fragment>
            <TableContainer component={Paper} className="table">
                <Table
                    aria-labelledby="tableTitle"
                    size={'medium'}
                >
                    <TableHead>
                        <TableRow>
                            { mapHeader() }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { mapBody() }
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="pag">
                <Stack spacing={2}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
            </div>
        </Fragment>
    )
}

export default TableProductos
