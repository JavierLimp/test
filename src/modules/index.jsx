import React, { Fragment, Component } from 'react'

import { connect } from "react-redux";

import { bindActionCreators } from 'redux';

import { actionData } from '../store/actions/actions-data'

import ReactPrincipal from '../controllers/componentPrincipal'

import { getMethod } from '../functions/rest-api/index'

import { API_CONSTANTS } from '../constants/api'
class App extends Component {

    async componentDidMount(){
        const { dataTable, actionData } = this.props

        if( dataTable.length === 0 ){
            console.log("NO_ENTRA");
            await getMethod( API_CONSTANTS.API, actionData )
        }
    }

    render(){
        const { dataTable } = this.props

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

const mapStateToProps = ({ dataTable }) => ( { dataTable } );

const mapDispachToProps = dispatch => ( bindActionCreators( { actionData }, dispatch ) );

export default connect( mapStateToProps, mapDispachToProps ) ( App );
