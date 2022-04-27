import React from 'react'

import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';

const TextFieldD = props => {

    const { rows } = props

    return(
        <TextField
            className="textField"
            { ...props }
            multiline
            rows = { rows }
        />
    )
}

TextFieldD.propTypes = {
    id              : PropTypes.string,
    label           : PropTypes.string,
    placeholder     : PropTypes.string,
    value           : PropTypes.string.isRequired,
    onChange        : PropTypes.func.isRequired,
}

TextFieldD.defaultProps = {
    id              : '',
    placeholder     : '',
    type            : 'text',
    rows            : 0
}

export default TextFieldD
