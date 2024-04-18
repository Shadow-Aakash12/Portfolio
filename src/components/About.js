import React from 'react'
import './About.css'

export default function About() {
  return (
    <div id='About-page'>
      <div className='header'>
        <a href="#" id='nav' className="logo"><span>A</span>bout me</a>
      </div>
        <section className="home">

            <div className="home-intro">
                <h1>Introduction</h1><br/><br/>
                <p className='about'>
                Hello, I'm Aakash Vinayak, a passionate Full Stack Developer and Technical Trainer at Six Phrase - The Finishing School. With a focus on hands-on mentoring, I've guided over 1500 students from top South Indian colleges in honing their Full Stack Development skills. My expertise extends to impactful projects, such as boosting a gaming niche's sales by 10% through HTML, CSS, and JavaScript, and improving operational efficiency by 20% with C Programming in a Bank Management system. In web development, I've reduced administrative time by 40% with a Student Database Management system in C++. Committed to continuous learning, I hold certifications in C, C++, Java, and SQL, along with expertise in HTML/CSS, React.js, and ethical hacking. My academic pursuits include NPTEL certifications in Upstream LNG technology and Basic principles and Calculations in Chemical Engineering. Explore my journey and projects on my professional Portfolio Website.
                </p>
            </div>

            <div className="edu">
              <div className='text'>
                <h1>Educational Background</h1><br/><br/>

                <h2>Bachelor of Technology</h2><br/>
                <h3>Saveetha Engineering College(Autonomous)</h3><br/>
                <h4><strong>CGPA: </strong>8.7</h4>
              </div>
              <img className='img' src='https://images.shiksha.com/mediadata/images/1615966849phpBbNJMy.jpeg' alt='college' />

                
                
            </div>
            
        </section>
    </div>
  )
}
