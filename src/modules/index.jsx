import React, { Fragment, Component } from 'react'

import ReactPrincipal from '../controllers/componentPrincipal'

import { getMethod } from '../functions/rest-api/index'

import { API_CONSTANTS } from '../constants/api'
import { INITIAL_STATE } from '../constants/modules'

class Principal extends Component {

    state = INITIAL_STATE.STATE

    async componentDidMount(){
        const { ok, response } = await getMethod( API_CONSTANTS.API );

        if( ok ){
            this.setState({ dataTable : response })
        }
    }

    render(){
        const { dataTable } = this.state

        if( dataTable.length === 0 ){
            return ( <div>{'Skeleton'}</div> )
        }
        return(
            <Fragment>

                <ReactPrincipal
                    data = { dataTable }
                />

            </Fragment>
        )
    }

}

export default Principal