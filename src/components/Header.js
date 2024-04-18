import React, { useState } from 'react'
import './Header.css'


export default function Header() {
 
  const[isOpen,setIsopen] = useState(false);

  const toggleSidebar = () => {

    isOpen === true ? setIsopen(false) : setIsopen(true);

  }


  return (
    <div>
        <header>
            <a href="#" className="logo"><span>S</span>hadow</a>

            <ul className="navbar">
                  <li><a href="#" className="active">Home</a></li>
                  <li><a href="./About">About</a></li>
                  <li><a href="./Projects" >Projects</a></li>
                  <li><a href="./Contact" >Contacts</a></li>
            </ul>

            <div className="btn btn-menu" onClick={toggleSidebar} >
                    <i className="bx bx-menu"></i>
            </div>

            <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0 logo"><span>S</span>hadow</h4>
                            <div className="btn btn-menu" onClick={toggleSidebar}><i className="bx bx-x"></i></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                                <li><a className="sd-link">Home</a></li>
                                <li><a className="sd-link">About</a></li>
                                <li><a className="sd-link">Projects</a></li>
                                <li><a className="sd-link">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={toggleSidebar}></div>
        </header>
    </div>
  )
}
