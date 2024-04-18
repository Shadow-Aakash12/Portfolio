import React from 'react'
import '../components/Skills.css'

const Skills = () => {
  return (
    <div className='skill'>

        <div className='header'>
            <a href="#" id='nav' className="logo"><span>S</span>kills</a>
        </div>


      <section className="section__card">

        <article className="card" >
        <div className="card__header">
            <img src="https://cdn.svgporn.com/logos/html-5.svg" alt="logo HTML" />
        </div>
        <div className="card__footer">
                <h2>HTML</h2>
                <ul>
                <li>HTML Tags</li>
                <li>Attributes</li>
                <li>Document Structure</li>
                <li>Hyperlinks</li>
                <li>Lists and more...</li>
                </ul>
        </div>
        </article>


        <article className="card">
        <div className="card__header">
            <img src="https://cdn.svgporn.com/logos/css-3.svg" alt="logo HTML" />
        </div>
        <div className="card__footer">
                <h2>CSS</h2>
                <ul>
                <li>Semantic UI</li>
                <li>Sass</li>
                <li>Components</li>
                <li>Animations ...</li>
                </ul>
        </div>
        </article>


        <article className="card">
        <div className="card__header">
            <img src="https://cdn.svgporn.com/logos/javascript.svg" alt="logo HTML" />
        </div>
        <div className="card__footer">
                <h2>javascript</h2>
                <ul>
                <li>jQuery</li>
                <li>ECMASCRIPT 6</li>
                <li>Ajax ...</li>
                </ul>
        </div>
        </article>

        <article className="card">
        <div className="card__header">
            <img src="https://cdn.svgporn.com/logos/react.svg" alt="logo React_js" />
        </div>
        <div className="card__footer">
                <h2>React Js</h2>
                <ul>
                <li>States & Props</li>
                <li>ECMASCRIPT 7</li>
                <li>Hooks</li>
                <li>Fetching Methods</li>
                <li>Redux ...</li>
                </ul>
        </div>
        </article>
        </section>
        

        {/* Section 2 */}
        <section className="section__card">

        <article className="card" >
        <div className="card__header">
            <img src="https://cdn.svgporn.com/logos/java.svg" alt="logo Java" />
        </div>
        <div className="card__footer">
                <h2>Java</h2>
                <ul>
                <li>OOPS & Methods</li>
                <li>Exception & File Handling</li>
                <li>Database Operations</li>
                <li>...</li>
                </ul>
        </div>
        </article>


        <article className="card">
        <div className="card__header">
            <img src="https://cdn.svgporn.com/logos/mysql.svg" alt="logo SQL" />
        </div>
        <div className="card__footer">
                <h2>MySQL</h2>
                <ul>
                <li>Normalization</li>
                <li>Joins</li>
                <li>Transaction</li>
                <li>Indexes</li>
                <li>Triggers</li>
                </ul>
        </div>
        </article>


        <article className="card">
        <div className="card__header">
            <img src="https://cdn.svgporn.com/logos/bootstrap.svg" alt="logo HTML" />
        </div>
        <div className="card__footer">
                <h2>Bootstrap v5</h2>
                <ul>
                <li>Classes</li>
                <li>Components</li>
                <li>Styling</li>
                </ul>
        </div>
        </article>

        <article className="card">
        <div className="card__header">
            <img src="https://cdn.svgporn.com/logos/tailwindcss.svg" alt="logo Tailwind CSS" />
        </div>
        <div className="card__footer">
                <h2>Tailwind CSS</h2>
                <ul>
                <li>Classes</li>
                <li>Components</li>
                <li>Styling</li>
                </ul>
        </div>
        </article>
        </section>
    </div>
  )
}

export default Skills
