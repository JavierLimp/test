import React from 'react'

import Table            from '@material-ui/core/Table';
import TableHead        from '@material-ui/core/TableHead';
import TableRow         from '@material-ui/core/TableRow';
import TableBody        from '@material-ui/core/TableBody';

import CreatorComponent from '../creatorComponent'

import { HEADERS } from '../../constants/modules'

import { mapeoTable,
    mapeoBody } from '../../functions/table'


const ReactTable = props => {

    const headerTable = data => mapeoTable( data ).map( item => {
        const { props, id, component } = item

        return ( <CreatorComponent  key = { id } component = { component } >
            { props }
        </CreatorComponent> )
    } )

    const bodyTable = data => mapeoBody( data ).map( ( item, idx ) => (
        <TableRow key={ idx } >
            {
                Object.values( item ).map( ( itm, idx ) => {
                    let html
                    if( idx !== 3 ){

                        html = ( <CreatorComponent  key = { `${itm.id}-${idx}` } component = { itm.component } >
                            { itm.props }
                        </CreatorComponent> )

                    } else {

                        html = ( <td key = { itm.id} ><CreatorComponent  key = { itm.id } component = { itm.component } src = { itm.props } /> </td> )

                    }

                    return html
                })
            }
        </TableRow>
    ))

  return (
      <Table className = { props.className } >

        <TableHead>

            <TableRow>
                {
                   headerTable( HEADERS )
                }
            </TableRow>

        </TableHead>

        <TableBody>
                {
                    bodyTable( props.data )
                }
        </TableBody>

      </Table>
  );
}

export default ReactTable
