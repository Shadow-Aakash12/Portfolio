import React from 'react'
import './Section.css'

export default function Section() {

  return (
    <div>
        <section className="home">
            <div className="home-text">
                <span>FullStack Developer</span>
                <h1>Aakash Vinayak</h1>
                <p>I'm eager to launch my career in an Organization where i can apply my knowledge and gain practical experience in the field. I am committed to continuously improving my skills and contributing to the growth of the Organization. With a strong work ethic and passion for problem solving. I am excited to tackle challenging projects and work collaboratively with a team of professionals to achieve shared goals.</p>
                <div className="main-btn">
                    <a href="https://drive.google.com/file/d/14fki3-EcG5hEiI-SwnGRL-TcGZvx-rmo/view" target='_blank' className="btn">Download CV</a>
                    <a href="#" className="btn two">Hire Me Now</a>
                </div>
            </div>
        </section>
    </div>
  )
}
