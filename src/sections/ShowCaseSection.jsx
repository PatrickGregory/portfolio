import React, { useRef } from 'react'
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
    const sectionRef = useRef(null);
    const travelRef = useRef(null);
    const dashboardRef = useRef(null);
    const landingRef = useRef(null);

   
    // projects.forEach((card, index) => {
    //     gsap.fromTo(
    //         card,
    //         {
    //             y: 50, opacity: 0
    //         },
    //         {
    //             y: 0,  opacity: 1, duration: 1, delay: 0.3 * (index + 1),
    //             scrollTrigger:{
    //                 trigger: card,
    //                 start: 'top bottom-=100',
    //             }
    //         }
    //     )
    // });

    useGSAP(()=>{
         const projects = [travelRef.current, dashboardRef.current, landingRef.current];

         projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y: 50, opacity: 0
            },
            {
                y: 0,  opacity: 1, duration: 1, delay: 0.3 * (index + 1),
                scrollTrigger:{
                    trigger: card,
                    start: 'top bottom-=100',
                }
            }
        )
    });

        gsap.fromTo(sectionRef.current, {opacity: 0}, {opacity: 1, duration: 1.5})
    }, []);
  return (
    <section ref={sectionRef} id='work' className='app-showcase'>
      <div className='w-full'>
        <div className="showcase-layout">
            {/* LEFT */}
            <div className="first-project-wrapper" ref={travelRef}>
                <div className="image-wrapper">
                    <img src="/images/travelReservation.png" alt="Ryde" />
                </div>
                <div className="text-content">
                    <h2>Vacation and business travels made with easy with a user-friendly "Travel Reservation App"</h2>
                    <p className="text-white-50 md:text-xl">
                        A website built with react, Bootstrap and React-Bootstrap for a good user experience. It allows users to book hotels, with ease. The app features a clean and modern design, making it easy to navigate and find the best deals for your travel needs.
                    </p>
                </div>
            </div>
            {/* RIGHT */}
            <div className='project-list-wrapper overflow-hidden'>
                <div className="project" ref={dashboardRef}>
                    <div className='image-wrapper bg-[#ffefdb]'>
                        <img src="/images/dashboard.png" alt="React-Dashboard" />
                    </div>
                    <h2>Kantee Dashboard</h2>
                </div>
                <div className="project" ref={landingRef}>
                    <div className='image-wrapper bg-[#ffe7eb]'>
                        <img src="/images/teamLanding.png" alt="Landing Page" />
                    </div>
                    <h2>A Landing Page built alongside my cohorts at <a href="https://Ijanafrica.com">IJAN Africa</a> to equip cohorts with collaborative skills</h2>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ShowCaseSection
