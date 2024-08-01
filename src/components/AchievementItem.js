import React from 'react'

import {motion} from 'framer-motion'
import {slide_left_options} from '../assets/constants/animation/slide_left'

function AchievementItem({data}) {
  return (
    <motion.div
      className="Achievement-item"
      initial={slide_left_options.initial}
      whileInView={slide_left_options.whileInView}
      transition={slide_left_options.transition}>
     
      <h4 className="highest-designation">{data.description}</h4>
    
    </motion.div>
  );
}

export default AchievementItem