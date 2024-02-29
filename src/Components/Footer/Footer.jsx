import React from 'react'
import ay7aga from './Footer.module.css'
export default function Footer() {
    return (
        <>
            <footer className={`${ay7aga.footerBg} text-center  py-5  text-white `} >
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>
                                LOCATION
                            </h3>
                            <p>
                                2215 John Daniel Drive
                            </p>
                            <p>
                                Clark, MO 65243
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h3>
                                AROUND THE WEB
                            </h3>
                            <div className="iconFooter w-100 text center mx-auto">
                                <i class={`${ay7aga.icon} fa-brands pe-4 fa-facebook`}></i>
                                <i class={`${ay7aga.icon} fa-brands pe-4 fa-twitter`}></i>
                                <i class={`${ay7aga.icon} fa-brands pe-4 fa-linkedin`}></i>
                                <i class={`${ay7aga.icon} fa-solid pe-4 fa-globe`}></i>



                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3>
                                ABOUT FREELANCER
                            </h3>
                            <p>
                                Freelance is a free to use, licensed Bootstrap theme created by Route


                            </p>
                        </div>
                    </div>
                </div>

                



            </footer>
            <section className={`${ay7aga.lastFooter} lastFooter  text-center text-white`}>
                    <p>
                        Copyright © Your Website 2021
                    </p>
                </section>
        </>
    )
}
