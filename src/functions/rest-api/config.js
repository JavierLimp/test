const APPLICATION = 'application/json';

const headers = {
    'Accept'       : APPLICATION,
    'Content-Type' : APPLICATION,
};

export const GET = () => ( {
    method  : 'GET',
    mode    : 'cors',
    headers,
} );
