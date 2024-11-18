import './App.css'
import Navbar from './components/Navbar'
import profile from './assets/image/profile.png'
import Project from './components/Project'
import { Contact } from './components/Contact'
import Footer from './components/Footer'
import { TypeAnimation } from 'react-type-animation';
import TextShpere from './animation/TextSphere'
import TechSlide from './components/TechSlide'
import projects from './data/projects'
import { red } from '@mui/material/colors'


function App() {
  // get projects elements
  const projectElements = projects.map((pj, index) => {
    return <Project key={index} project={pj} />;
  })

  return (
    <>
      <Navbar />
      <div className="App-con">
        <div className="section-about-con" id='about'>
          <div className="about-info">
            <h1>Hi 👋, I'm<br />
              <TypeAnimation className='name'
                sequence={[
                  'Jirawat Ornsri',
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Front-end Dev',
                  2000,
                  'Web Developer',
                  2000,
                  'Mobile Dev',
                  2000
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              /> <br />
              I build thing for web</h1>
              <a href="/Jirawat_Ornsri_Resume.pdf" download>Download Resume</a>
          </div>
          <div className="about-profile">
            <img className='profile' src={profile} alt="" />
          </div>
        </div>

        <div className="section-tech-con" id='techskill'>
          <h1>My Tech Stack</h1>
          <p>Technologies I've been working qith recently</p>
          {/* <TextShpere /> */}
          <TechSlide />
        </div>

        {/* section projects */}
        <div className="section-project-con" id='project'>
          <h1>Projects</h1>
          <p>Thing I've built so far</p>
          <div className="project-items-grid">
            {/* display projects */}
            {projectElements}
          </div>
        </div>
        <Contact />

      </div>
      <Footer />
    </>
  )
}

export default App
