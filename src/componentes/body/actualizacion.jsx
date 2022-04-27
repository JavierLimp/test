import React, { useState } from 'react'

import Plus from '../../assets/img/plus.svg'

import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton';

import photoCamera from '../../assets/img/photo-camera.svg'
import close from '../../assets/img/close.svg'

import TextFieldD from '../text-field/text-field'

import { validationIsEmpty } from '../../functions/validations'

const Actualizacion = props => {

    const { functionGuardar } = props

    const [ categoria, setCategoria ] = useState('')
    const [ inventario, setInventario ] = useState( '' )
    const [ precio, setPrecio ] = useState( '' )
    const [ color, setColor ] = useState( '' )
    const [ marca, setMarca ] = useState( '' )
    const [ composicion, setComposicion ] = useState( '' )
    const [ target, setTarget ] = useState( '' )

    const guardar = () => {
        const objectData = {
            "nombre": "imagen...",
            "zapatos": "84% poliester... %",
            "categoria": categoria,
            "precio": precio,
            "cantidad": "30",
            "inventario": inventario
        }

        if( !validationIsEmpty( objectData )){
            functionGuardar(objectData)
        }
    }

    return(
        <div className='actualizacion'>
            <div className='close'>
                <img
                    src={close}
                    srcSet={close}
                    alt={close}
                    loading="lazy"
                />
            </div>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Grid item md={4} className="foto">
                    <div className='centerPlus'>
                    <img
                        src={photoCamera}
                        srcSet={photoCamera}
                        alt={photoCamera}
                        loading="lazy"
                    />
                    </div>
                    <IconButton color="primary" aria-label="edit" component="span" className="abajo">
                        <img
                            src={ Plus }
                            alt={ Plus }
                            loading="lazy"
                        />
                    </IconButton>
                </Grid>
                <Grid item md={4}>
                    <div className='textoss'>
                        <h2>{'GENERAL'}</h2>
                    </div>
                    <div className='textoss'>
                    <TextFieldD
                        id='Categoría'
                        value = { categoria }
                        placeholder={'Categoría'}
                        onChange = { e => setCategoria( e.target.value ) }
                    />
                    </div>
                    <div className='textoss'>
                    <TextFieldD
                        id = { 'inventario' }
                        value = { inventario }
                        placeholder = { 'Stock' }
                        onChange = { e => setInventario( e.target.value ) }
                    />
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div className='textoss vacio'>

                    </div>
                    <div className='textoss'>
                    <TextFieldD
                        id = { 'precio' }
                        value = { precio }
                        placeholder={'Precio'}
                        onChange = { e => setPrecio( e.target.value ) }
                    />
                    </div>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Grid item md={4} >
                    <div className='textoss sinCentrar'>
                        <h2>{'Descripción'}</h2>
                    </div>
                    <div className='textoss sinCentrar'>
                        <TextFieldD
                            id = 'Descripcion'
                            value = { '' }
                            rows={6}
                            placeholder={'Escribe algo que describa este producto'}
                            onChange = { () => {} }
                        />
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div className='textoss'>
                        <h2>{'ACERCA DEL PRODUCTO'}</h2>
                    </div>
                    <div className='textoss'>
                    <TextFieldD
                        id = { 'color' }
                        value = { color }
                        placeholder={'Color'}
                        onChange = { e => setColor( e.target.value ) }
                    />
                    </div>
                    <div className='textoss'>
                    <TextFieldD
                        id='marca'
                        value = { marca }
                        placeholder = { 'Marca' }
                        onChange = { e => setMarca( e.target.value ) }
                    />
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div className='textoss vacio2'>

                    </div>
                    <div className='textoss'>
                        <TextFieldD
                            id='composicion'
                            value = { composicion }
                            placeholder={'Composicion'}
                            onChange = { e => setComposicion( e.target.value ) }
                        />
                    </div>
                    <div className='textoss'>
                    <TextFieldD
                        id='target'
                        value = { target }
                        placeholder={'Target'}
                        onChange = { e => setTarget( e.target.value ) }
                    />
                    </div>
                    <button type='button' className='buttonn' onClick={ guardar }>
                    {'Guardar'}
                </button>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Actualizacion
