import TableCell from '@material-ui/core/TableCell';
import Avatar    from '@material-ui/core/Avatar';

export const mapeoTable = data => data.map( ( item, index ) => ( 
    { props : item, id : `${index}-${item}`, component : TableCell } )
)

export const mapeoBody = data => data.map( data => {

    let result = {}

    for (const key in data ) {

        result[ key ] = {
            props     : data[ key ],
            id        : `${key}-${ data[ key ] }`,
            component : key !== 'url' ? TableCell : Avatar }

    }
    return { ...result }
})

/**
 * Veo una gran mejora en estás dos funciones, se pueden re hacer en una sola,
 * con mas tiempo lo puedo lograr.
 */
