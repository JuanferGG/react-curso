import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class lifeCycle extends Component {

    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente - Solo vara inicializacion de variables')
    }

    componentWillUnmount() {
        console.log('WillUnmount: Antes del montage del componente')
    }

    componentDidMount() {
        console.log('DidMount: Justo al acabar el montage del componente antes de pintarlo')
    }

    componentWillReceiveProps(nextProps){
        console.log('WillReciveProps: Basicamente si va recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nexState){
        // Sirve para controlar si el componente debe o no actualizarse
        // return true
        // return false
    }

    componentWillUpdate(nextProps, nextState){
        console.log('WillUpdate: Justo antes de actualizarse')
    }
    
    componentDidUpdate(nextProps, nextState){
        console.log('DidUpdate: Justo despues de actualizarse')
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>lifeCycle</div>
        )
    }
}
