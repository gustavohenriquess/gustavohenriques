import { IconBaseProps } from 'react-icons';

import styles from './styles.module.scss'

type Props = {  
  title: string,
  icon?: React.ComponentType<IconBaseProps>;
  href?: string,
  type: 'W' | 'C',
}

export function SocialMedia({title, icon: Icon, href, type}: Props) {
  
  return (
    <span className={type == 'W' ? styles.mediaWeb : styles.mediaCard}>
      <a title={title} href={href || '/'} target="_blank" rel="noreferrer">
      {Icon && <Icon size={32} />}
      <p>{title}</p>
      </a>
    </span>
  )

  
}
