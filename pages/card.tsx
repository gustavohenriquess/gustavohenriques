import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react';


import { SocialMedia } from '../components/SocialMedia'
import { User } from '../components/User'

import {getMediasCard} from './api/socialMedia'
import {getUser} from './api/userData'

import styles from '../styles/Card.module.scss'

type LangType = 'en' | 'pt'

const Card: NextPage = () => {
  const medias = getMediasCard();
  const user = getUser();
  const [language, setLaguage] = useState<LangType>('en');

  function changeLanguage(){
    
    switch(language){
      case 'en':
        setLaguage('pt');
        break;
      case 'pt':
        setLaguage('en');
        break;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Gustavo Henriques</title>
        <meta name="description" content={` ${user.name}, ${user.translate['pt'].office}`}/>
      </Head>

      <div className={styles.flag}>
      <Image
        className={language === 'pt' ? styles.notSelected : styles.selected}
        width={35}
        height={35}
        src={'/brazil.png'}
        alt={'flag'}
        onClick={changeLanguage}
            />
      <Image
        className={language === 'en' ? styles.notSelected : styles.selected}
        width={35}
        height={35}
        src={'/usa.png'}
        alt={'flag'}
        onClick={changeLanguage}
            />
    </div>
      
      <div className={styles.user}>

      <User 
            logo={user.logo} 
            image={user.image} 
            name={user.name}
            alt_image={user.translate[language].alt_image}
            office={user.translate[language].office}
            summary={user.translate[language].summary}
            showSummary={false}
      />
      <section className={styles.socialMedias}>
        { medias.map((media) => {
          return (<SocialMedia
            key={media.title}
            type='C'
            title={media.title}
            icon={media.icon}
            href={media.href}
            target={media.target}
            />)
          })}
      </section>
      </div>
    </div>
  )
}

export default Card
