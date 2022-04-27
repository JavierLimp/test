import React, { Component, Fragment } from "react";

import { Header } from "../componentes/header/header";
import { Body } from "../componentes/body/body";

import { REST_GET, REST_DELETE, REST_POST } from '../functions/rest-api/rest-metodos'

import cloneDeep from 'lodash/cloneDeep'

export class Principal extends Component {

    state = {
        data : [],
        editar : false,
        idEditar : 0,
        actualizar : false
    }

    async componentDidMount(){
        this.functionService()
    }

    functionEliminarItem = async id => {
        const { data } = this.state

        let newData = cloneDeep( data )

        newData.splice( id - 1, 1 )

        this.setState({
            data : newData
        })

        await REST_DELETE(`posts/${id}`)
    }

    componentDidUpdate( prevProps, prevState ){
        if( this.state.data.length !== prevState.data.length ){
            this.functionService()

        }

    }

    functionService = async () => {
        const dataService = await REST_GET('posts')
        this.setState({ data : dataService })
    }

    functionEditar = id => {
        this.setState({
            editar : true,
            id
        })
    }

    functionGuardar = async ( objetData ) => {
        await REST_POST( 'posts', {...objetData} )

    }

    render(){
        const { data, editar, actualizar } = this.state

        return(
            <Fragment>
                 <Header/>
                 <Body
                    data = { data }
                    editar = { editar }
                    actualizar = { actualizar }
                    functionEliminarItem = { this.functionEliminarItem }
                    functionEditar = { this.functionEditar }
                    functionGuardar = { this.functionGuardar }
                 />
            </Fragment>
        )
    }
}