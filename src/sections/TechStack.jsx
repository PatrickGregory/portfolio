import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', {y: 50, opacity: 0},{
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger:{
                trigger: '#skills',
                start: 'top center',
            }
        })
    }, [])
  return (
    <div id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader 
        title='My preferred tech stack'
        sub='🦾 The Skills I bring to the table'
        />

        <div className="tech-grid">
            {techStackIcons.map((icon) =>(
                <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                    <div className='tech-card-animated-bg'/>

                    <div className="tech-card-content">
                        <div className="tech-icon-wrapper">
                            <TechIcon model={icon}/>
                        </div>

                        <div className='padding-x w-full '>
                            <p>{icon.name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
