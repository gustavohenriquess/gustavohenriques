import type { NextPage } from 'next'
import Head from 'next/head'

import { SocialMedia } from '../components/SocialMedia'
import { User } from '../components/User'
import { Experience } from '../components/Experience'
import { Course } from '../components/Course'

import {getMedias} from './api/socialMedia'
import {getUser} from './api/userData'
import { getExperiences } from './api/experiences'
import { getCourses } from './api/courses'

import Image from 'next/image';
import { useState } from 'react'

import styles from '../styles/Home.module.scss'

type LangType = 'en' | 'pt'

const Home: NextPage = () => {
  const medias = getMedias();
  const user = getUser();
  const experiences = getExperiences();
  const courses = getCourses();
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
        <title>{user.name}</title>
        <meta name="description" content={` ${user.name}, ${user.translate[language].office}`}/>
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

      <div className={styles.summary}>

      <User 
            logo={user.logo} 
            image={user.image} 
            name={user.name}
            alt_image={user.translate[language].alt_image}
            office={user.translate[language].office}
            summary={user.translate[language].summary}
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
          { experiences.map((experience) => {
              return (
                <Experience 
                  key={`${experience.company}__${experience.translate[language].title}`}
                  description={experience.translate[language].description}
                  title={experience.translate[language].title}
                  company={experience.company}
                />
              )
            })
          }

          <h2>{language === 'en' ? 'Courses' :'Cursos'}</h2>
          <section className={styles.courses}>
            
            
            
            { courses.map((course) => {
              return (
                <Course
                  key={course.key}
                  title={course.title}
                  href={course.href}
                  company={course.company}
                  date={course.date}
                />
            )})
            }

          </section>
      </div>
      

    </div>
  )
}

export default Home
