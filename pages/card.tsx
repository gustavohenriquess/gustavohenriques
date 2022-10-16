import type { NextPage } from 'next'
import Head from 'next/head'

import { SocialMedia } from '../components/SocialMedia'
import { User } from '../components/User'

import {getMediasCard} from './api/socialMedia'
import {getUser} from './api/userData'

import styles from '../styles/Card.module.scss'

const Card: NextPage = () => {
  const medias = getMediasCard();
  const user = getUser();

  return (
    <div className={styles.container}>
      <Head>
        <title>Gustavo Henriques</title>
        <meta name="description" content={` ${user.name}, ${user.translate['pt'].office}`}/>
      </Head>
      
      <div className={styles.user}>

      <User 
            logo={user.logo} 
            image={user.image} 
            name={user.name}
            alt_image={user.translate['pt'].alt_image}
            office={user.translate['pt'].office}
            summary={user.translate['pt'].summary}
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
