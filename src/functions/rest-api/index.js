import env from "react-dotenv";

import axios from 'axios'

import { ACTION_DATA } from '../../constants/store/actions'

const API_URL = env.API_URL

const REST_API = async ( endPoint, action ) => (
    axios.get( endPoint ).then( response => {
        action({ type : ACTION_DATA.SET_ACTION_DATA, payload: response.data  })
    })
)

export const getMethod = ( endPoint, action ) => REST_API( `${ API_URL }${ endPoint }`, action )


/**
 * NOTE: Necesito revisar porque no me quedo con FETCH
 * tuve que cambiar la metodología con AXIOS
 * Considere un FETCH, pensando en que a esos metodos como
 * son maleables, puedemos configurar el propio header

 import { GET } from './config';

 const REST_API = async ( endPoint, verb ) => {
    let result = { ok: false, response : {} }
    try {
        const response = await fetch( endPoint, verb );

        if( response.status === 200 ) {
            result = { ok: true, response : await response.json() }
        }

    } catch( error ) {
        console.log('Service fail');
    }
    return result
}; */