import env from "react-dotenv";

import { GET } from './config';

const API_URL = env.API_URL

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
};

export const getMethod = endPoint => REST_API( `${ API_URL }${ endPoint }`, GET() )
