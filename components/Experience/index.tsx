
import styles from './styles.module.scss'

type ExperienceType = {
  company: string;
  title: string;
  description: string[];
  
};

export function Experience(props: ExperienceType) {
  
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
