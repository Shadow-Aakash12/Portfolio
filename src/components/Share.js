import React from 'react'
import './Share.css'

export default function Share() {
  return (
    <div>
        <div className="share">
            <p className="share">Check out my:</p>

            <div className="social">
                <a href="https://www.github.com/Shadow-Aakash12" target="_blank" rel='nonreferrer'><i className='bx bxl-github' id="bxl-github"></i></a>
                <a href="https://www.instagram.com/aakashvinayak_official?igsh=MTIxZm9rcnZiZWRkNg==" target="_blank" rel='nonreferrer'><i className='bx bxl-instagram' id="bxl-instagram"></i></a>
                <a href="https://www.linkedin.com/in/aakash-vinayak-sankar-8401421a3/" target="_blank" rel='nonreferrer'><i className='bx bxl-linkedin' id="bxl-linkedin"></i></a>
                <a href="https://www.facebook.com/aakash.sankar.927" target="_blank" rel='nonreferrer'><i className='bx bxl-facebook' id="bxl-facebook"></i></a>
            </div>
        </div>
    </div>
  )
}
