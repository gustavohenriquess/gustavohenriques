import { useState } from 'react';
import Image from 'next/image';

import {User} from '../../@types/User'

import styles from './styles.module.scss'

export function User(props: User) {

  const [logo, setLogo] = useState(props.logo);

  function changeLogo(){

    if(props.logo && props.image != props.logo){
      if(logo == props.logo){
        setLogo(props.image);
      }else{
        setLogo(props.logo);
      }
    }
  }
  
  return (
   <> 
          <Image
            className={styles.userImage}
            width={195}
            height={195}
            src={logo}
            alt={props.alt_image}
            onClick={changeLogo}
          />
        <section>
          <h1 className={styles.name} >{props.name}</h1>
          <p className={styles.office}>{props.office}</p>
          
          {props.summary && props.summary.map(text => {
            return (<p key={text}>{text}</p>)
          })}
        </section>
   </>
  )

  
}
