import React from 'react'
import ay7aga from './About.module.css'
export default function About() {
  return (<>

    <section className={`${ay7aga.about}  about  `}>
      <div className="container">
        <div className="head-content ">
          <h2 className='fs-1  fw-bolder'>
            ABOUT COMPONENT
          </h2>
          <div className={`${ay7aga.icon} icon my-3  `}>
        <i className="fa-solid  fa-star "></i>
        </div>
          <div className={`${ay7aga.row} row px-5`}>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.


              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.


              </p>
            </div>
          </div>
        </div>
      </div>
    </section>







    {/* <div className= {`${ay7aga.container} container` }>
  <div className={`${ay7aga.about}`}>
        <h2>ABOUT COMPONENT</h2>
        <div className="icon-star">
        <i class="fa-solid fa-star"></i>
        <div className={`${ay7aga.row} row`}>
          <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>

        
      </div>
    </div>
  </div> */}


  </>
  )
}
