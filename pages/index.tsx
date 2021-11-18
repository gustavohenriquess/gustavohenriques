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

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const medias = getMedias();
  const user = getUser();
  const experiences = getExperiences();
  const courses = getCourses();

  return (
    <div className={styles.container}>
      <Head>
        <title>{user.name}</title>
        <meta name="description" content={` ${user.name}, ${user.office}`}/>
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
          { experiences.map((experience) => {
              return (
                <Experience 
                  key={`${experience.company}__${experience.title}`}
                  title={experience.title}
                  company={experience.company}
                  description={experience.description}
                />
              )
            })
          }

          <h2>Cursos</h2>
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
