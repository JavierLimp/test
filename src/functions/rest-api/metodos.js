const APPLICATION = 'application/json';

const headers = {
    'Accept'       : APPLICATION,
    'Content-Type' : APPLICATION,
}

export const GET = () => ( {
    method : 'GET'
} );

export const DELETE = () => ( {
    method : 'DELETE'
} );

export const POST = body => ({
    method : 'POST',
    /* headers, */
    body: JSON.stringify( body )
})