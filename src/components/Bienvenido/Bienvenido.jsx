import React from 'react'
import Botones from '../Botones/Botones.jsx'
import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.svg'
import javascriptImg from '../../assets/javascript.png'
import mysqlImg from '../../assets/mysql.png'
import reactImg from '../../assets/react.png'
import redux from '../../assets/redux.png'
import styles from './Bienvenido.module.css'
import Perfil from '../Perfil/Perfil.jsx'
const studentName = 'My Developer Skills'
const techSkills = [{ tech: 'Html', image: htmlImg }, { tech: 'Css', image: cssImg }, { tech: 'JavaScript', image: javascriptImg }, { tech: 'React', image: reactImg }, { tech: 'Redux', image: redux }]
const techSkills2 = [{ tech: 'MySQL', image: mysqlImg }]

export default function Bienvenido () {
  return (
    <div className={styles.divBienvenido}>
      <div className={styles.overlay}>
      <h1 className={styles.title}>Emmanuel - LexdeIT</h1>
      <Perfil></Perfil>
      <h3 className={styles.subtitle}>{studentName}</h3>
      <ul className={styles.unorderedList}>
        {techSkills.map(skill => (
          <li className={styles.listItem}key={skill}>{skill.tech}<img className={styles.listItem.img} src={skill.image} alt={skill.tech} /></li>
        ))}
      </ul>

      <ul className={styles.unorderedList}>
        {techSkills2.map(skill => (
          <li className={styles.listItem}key={skill}>{skill.tech}<img className={styles.listItem.img} src={skill.image} alt={skill.tech} /></li>
        ))}
      </ul>

      <Botones/>
      </div>
    </div>
  )
}

export { studentName, techSkills}
