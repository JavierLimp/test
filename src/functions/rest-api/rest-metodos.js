import { GET, DELETE, POST } from './metodos';

const URL_API = 'http://localhost:8081/';

const REST_API = async ( endPoint, verb ) => {
    try {
        const respond = await fetch( endPoint, verb );

        if( respond.status !== 200 ) {
            let result = { ok: false }
            if( respond.status !== 403 ) {
                const {status, message } = await respond.json();
                result = { status, message, ok: false };
            }
            return result;
        }
        return respond.json();

    } catch( error ) {
        return { ok: false, message: 'Service fail' };
    }
};

export const REST_GET = ( endPoint ) => {
    return REST_API( `${ URL_API }${ endPoint }`, GET() );
}

export const REST_DELETE = ( endPoint ) => {
    return REST_API( `${ URL_API }${ endPoint }`, DELETE() );
}

export const REST_POST = ( endPoint, body ) => {
    return REST_API( `${ URL_API }${ endPoint }`, POST( body ) );
}