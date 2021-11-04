import { Experience } from '../../@types/Experience'

import styles from './styles.module.scss'

export function Experience(props: Experience) {
  
  return (
    <article className={styles.container}>
          <h3 className={styles.title} >{props.title}</h3>
          <h5 className={styles.company} >{props.company}</h5>
          {props.description.map(text => {
            return (<p key={text}>{text}</p>)
          })}
    </article>
  )
}
