import { IconBaseProps } from 'react-icons';

import styles from './styles.module.scss'

type Props = {  
  title: string,
  icon?: React.ComponentType<IconBaseProps>;
  href?: string,
  type: 'W' | 'C',
  target?: string,
}

export function SocialMedia({title, icon: Icon, href, type, target}: Props) {
  
  return (
    <span className={type == 'W' ? styles.mediaWeb : styles.mediaCard}>
      <a title={title} href={href || '/'} target={target ? target : '_blank'} rel="noreferrer">
      {Icon && <Icon size={32} />}
      <p>{title}</p>
      </a>
    </span>
  )
}
