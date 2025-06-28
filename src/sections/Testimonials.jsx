import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'

const Testimonials = () => {
  return (
    <section id='testionials' className='section-padding flex-center '>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
            sub='⭐ Friends and colleagues opinions'
            title='What people say about kantee'
            />

            <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
                {testimonials.map(({imgPath, mentions, name, review}) =>(
                    <GlowCard card={{review}}>
                        <div className='flex items-center gap-3'>
                            <div>
                                <img src={imgPath} alt={name} />
                            </div>
                            <div>
                                <p className="font-bold">{name}</p>
                                <p className="text-white-50">{mentions}</p>
                            </div>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials