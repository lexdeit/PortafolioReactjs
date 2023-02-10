import React from 'react';
import styles from '../Perfil/Perfil.module.css'


export default function(){
    return(
        <div>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/115962817?s=400&u=662430ff742f7d868f0db419b6561c1af37c866e&v.jpg" alt="LexdeIT"/>

        <div className={styles.div}>

        <h2 className={styles.nombre}>Emmanuel Villavicencio</h2>
        </div>
        <p className={styles.parrafo}>Me gusta viajar, la fotografia y jugar videojuegos</p>
        </div>
    )
}