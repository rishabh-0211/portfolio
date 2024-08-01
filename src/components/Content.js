import React from 'react'
import Introduction from './Introduction'
import About from './About'
import Achievement from './Achievement'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import {intro_constants} from '../assets/constants/intro_constants'
import {about_constants} from '../assets/constants/about_constants'
import {Achievement_constants} from '../assets/constants/Achievement_constants'
import {project_constants} from '../assets/constants/project_constants'
import {skill_constants} from '../assets/constants/skill_constants'
import {profile_data} from '../assets/constants/profile_constants.js'

function Content() {
  return (
    <div className="content d-flex flex-column">
      <Introduction
        id="introduction-section"
        author={intro_constants.author}
        tagline={intro_constants.tagline}></Introduction>
      <About id="about-section" body={about_constants.body}></About>

      <Skills id="skill-section" skills={skill_constants}></Skills>
      <Projects id="project-section" projects={project_constants}></Projects>
      <Achievement
        id="Achievement-section"
        Achievements={Achievement_constants}></Achievement>
      <Contact id="contact-section" emailId={profile_data.email}></Contact>
    </div>
  );
}

export default Content