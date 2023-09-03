import { useState } from 'react';
import Image from 'next/image';

import { User } from '../../@types/User'

import styles from './styles.module.scss'
import { func } from 'prop-types';

type UserType = {
  logo: string;
  image: string;
  alt_image: string;
  name: string;
  office: string;
  summary?: string[];
  showSummary?: boolean;
};

export function User(props: UserType) {

  const [logo, setLogo] = useState(props.logo);
  const [changed, setChanged] = useState(false);
  function changeLogo() {

    if (props.logo && props.image != props.logo) {
      if (logo == props.logo) {
        setLogo(props.image);
      } else {
        setLogo(props.logo);
      }
    }
  }

  function change() {
    if (!changed) {

      setTimeout(() => {
        changeLogo();
      }, 1000 * 60);
      setChanged(true);
    }
  }

  change();

  return (
    <>
      <Image
        className={styles.userImage}
        width={150}
        height={150}
        src={logo}
        alt={props.alt_image}
        onClick={changeLogo}
      />
      <section>
        <h1 className={styles.name} >{props.name}</h1>
        <p className={styles.office}>{props.office}</p>

        {props.showSummary && props.summary && props.summary.map(text => {
          return (<p className={styles.summary} key={text}>{text}</p>)
        })}
      </section>
    </>
  )


}
