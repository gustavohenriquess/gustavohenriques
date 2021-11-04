import { Course } from '../../@types/Course'

import styles from './styles.module.scss'

export function Course(props: Course) {
  
  return (
    <article className={styles.container}>
      <a href={props.href} target="_blank" rel="noreferrer">
        <h4>{props.title}</h4>
        <h5>{props.company}</h5>
        <h6>{props.date}</h6>
      </a>
    </article>
  )
}
