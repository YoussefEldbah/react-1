import React from 'react'
import contactStyle from './Contact.module.css'
export default function Contact() {
  return (
    <>
      <section className={`${contactStyle.contact}  text-center mt-5`} >
        <div className="container pt-5 ">
          <div className="title text center  ">
            <h2 className='fs-1  fw-bolder mt-3'>
              CONATCT SECTION
            </h2>
            <div className={`${contactStyle.icon} icon mb-5  `}>
        <i className="fa-solid  fa-star "></i>
        </div>
            <div className="contact ">
              <form className=" m-auto d-flex flex-column  w-50">
                <div className="mb-5">
                  <input type="text" placeholder='userName' className="form-control" id="name" />
                </div>
                <div className="mb-5">
                  <input type="number" className="form-control" placeholder='userAge' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-5">
                  <input type="email" placeholder='userEmail' className="form-control" id="number" />
                </div>
                <div className="mb-5">
                  <input type="password" placeholder='userPassword' className="form-control" id="number" />
                </div>
                
                <button type="button" className={`${contactStyle.btn} w-25`}>Send Massage</button>
              </form>
            </div>
          </div>
        </div>
      </section>






    </>
  )
}
