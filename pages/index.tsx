import type { NextPage } from 'next'
import Head from 'next/head'

import { SocialMedia } from '../components/SocialMedia'
import { User } from '../components/User'
import {getMedias} from './api/socialMedia'
import {getUser} from './api/userData'
import { getExperiences } from './api/experiences'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const medias = getMedias();
  const user = getUser();
  const experiences = getExperiences();

  return (
    <div className={styles.container}>
      <Head>
        <title>Gustavo Henriques</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      
      <div className={styles.summary}>

      <User 
            logo={user.logo} 
            image={user.image} 
            alt_image={user.alt_image} 
            office={user.office}
            name={user.name}
            summary={user.summary}
      />
      <section className={styles.socialMedias}>
        { medias.map((media) => {
          return (<SocialMedia
            key={media.title}
            type='W'
            title={media.title}
            icon={media.icon}
            href={media.href}
            />)
          })}
      </section>
      </div>
      <div className={styles.information}>
      
      </div>
      

    </div>
  )
}

export default Home
