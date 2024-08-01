import React from 'react'
import SectionHeader from './SectionHeader'
import AchievementItem from "./AchievementItem";
import {motion} from 'framer-motion'
import {slide_up_options} from '../assets/constants/animation/slide_up'
import useScrollSpy from '../hooks/useScrollSpy'

function Achievement({id, Achievements}) {
  const ref = useScrollSpy(id);
  return (
    <section ref={ref} id={id} className='overflow-hidden'>
    <motion.div className='portfolio-section Achievement d-flex flex-column justify-content-between' 
      initial={slide_up_options.initial} 
      whileInView={slide_up_options.whileInView} 
      transition={slide_up_options.transition}
    >
      <SectionHeader id={id} headline="Achievement" iconClass={"fa fa-briefcase"}></SectionHeader>
      <h5 className='display-5'> <span className='display-5 highlighted-text'>Achievements</span></h5>
      <div>
        {Achievements.map((Achievement, index) => {
          return <AchievementItem data={Achievement} key={index}></AchievementItem>
        })}
      </div>
    </motion.div>
    </section>
  )
}

export default Achievement