import React from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
    return (
        <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
            <div className='mx-auto grid-2-cols'>
                {counterItems.map((items) => (
                    <div className='bg-zinc-900 rounded-lg p-10 flex justify-center'>
                        <div key={counterItems.label} className='counter-number text-white text-5xl font-bold mb-2'>
                            <CountUp suffix={items.suffix} end={items.value} />
                        </div>
                        <div className='text-white-50 mt-3 sm:mb-2 text-lg'>{items.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimatedCounter
