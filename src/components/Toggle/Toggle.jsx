import React from "react";
import styles from '../Toggle/Toggle.module.css'

export default class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            claro: true
        }
    }


    aumentar = () => {
        this.setState({
            count: this.state.count + 1 
        });
    };

    decrementar = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    reiniciar = () => {
        this.setState({
            count: this.state.count = 0
        })
    }

    toggle = () => {
        this.setState({claro:!this.state.claro})    
    }

    render(){
        return (
            <>
            <p className={styles.parrafo}>{this.state.count}</p>
            <div>
            <button className={styles.boton} onClick={this.aumentar}>Aumentar!</button>
            <button className={styles.boton} onClick={this.decrementar}>Decrementar!</button>
            <button className={styles.boton} onClick={this.reiniciar}>Reiniciar!</button>
            </div>
            <button onClick={this.toggle} className={this.state.claro?styles.oscuro:styles.claro}>{this.state.claro?"Claro":"Oscuro"}</button>
            </>
        )
    }
}

