import React, { Component, Fragment } from 'react';
import Producto from './Producto'

class ListaProductos extends Component {
    state = {
        productos:[
        {id: 1, name : 'Camisa React', precio: 30},
        {id: 2, name : 'Camisa Vuejs', precio: 30},
        {id: 3, name : 'Camisa Angular', precio: 30},
        {id: 4, name : 'Camisa Node', precio: 30},
        ],
        totalCarrito: 500,
        cliente: 'Cesar Cueva'
    }

    componentDidMount(){
        console.log(1)
    }
    componentWillMount(){
        console.log(2)
    }
    componentWillUpdate(){
        console.log(3)
    }
    render() { 
        console.log(4)
        const {productos} = this.state;
        return (
            <Fragment>
                <h1>Lista de productos</h1>
                {productos.map(producto =>(
                    <Producto
                    key = {producto.id}    
                    producto = {producto}
                    />
                ))}
            </Fragment>
        );
    }
}
 
export default ListaProductos;