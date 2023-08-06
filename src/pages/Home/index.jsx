import React, { useState } from 'react';
import { ProjectCard } from '../../components';
import data from '../../utils/main.json';

const Home = () => {
    // console.log(data)
    return (
        <>
            <div className="home">
                <div className="hero-section" id='home'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mt-md-5 pt-md-5">
                                <div className="fs-32 fw-600 text-white mb-4" dangerouslySetInnerHTML={{ __html: data.Header[0].heading }}>

                                </div>
                                <div className="fs-16 fw-400 text-grey mb-4" dangerouslySetInnerHTML={{ __html: data.Header[1].heading }}>

                                </div>
                                <a href="javascript:void(0)" className='btnPrimary h-37'>Contact me!!</a>
                            </div>
                            <div className="col-lg-6">
                                <div className="dog-img">
                                    <img src="/assets/images/header-dog.png" className='w-100' alt="" />
                                </div>
                                <div className="current-box gap-3">
                                    <div className="online-box"></div>
                                    <div className="fs-16 fw-500 text-grey" dangerouslySetInnerHTML={{ __html: data.Header[2].heading }}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-relative power-box-section py-5">
                    <div className="container">
                        <div className="power-width">
                            <div className="power-box position-relative">
                                <div className="fs-24 fw-500 text-white">
                                    {data.Header[3].heading}
                                </div>
                                <div className="comma comma-left">
                                    <img src="/assets/images/comma.svg" alt="" />
                                </div>
                                <div className="comma comma-right">
                                    <img src="/assets/images/comma.svg" alt="" />
                                </div>
                            </div>
                            <div className="who-box">
                                <div className="fs-24 fw-400 text-white">
                                    - Dr. Who
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="projects-section position-relative" id='project'>
                    <div className="container">
                        <div className="d-flex align-items-center gap-3">
                            <div className="fs-32 fw-500 text-white"><span className="text-primary">#</span>projects</div>
                            <div className="heading-line"></div>
                        </div>

                        <div className="row mt-5">
                            {data.project.map((item, index) => {
                                return (
                                    <div className="col-lg-4 mb-4" key={index}>
                                        <ProjectCard item={item} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="dots-4">
                        <img src="/assets/images/dots-4.svg" alt="" />
                    </div>

                </div>

                <div className="skills-section" id='skills'>
                    <div className="container">
                        <div className="d-flex align-items-center gap-3">
                            <div className="fs-32 fw-500 text-white"><span className="text-primary">#</span>skills</div>
                            <div className="heading-line"></div>
                        </div>
                        <div className="row align-items-center mt-5">
                            <div className="col-lg-5 mb-md-0 mb-5">
                                <div className="skills-img">
                                    <img src="/assets/images/skills-dots.png" className='w-100' alt="" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row justify-content-end">
                                    <div className="col-lg-4 mb-3">
                                        <div className="skills-box">
                                            <div className="head">
                                                <div className="fs-16 fw-600 text-white text-capitalize">Languages</div>
                                            </div>
                                            <div className="body">
                                                {data.skills[0].languages}
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 mb-3">
                                        <div className="skills-box mb-3">
                                            <div className="head">
                                                <div className="fs-16 fw-600 text-white">Databases</div>
                                            </div>
                                            <div className="body">
                                                {data.skills[1].database}
                                            </div>
                                        </div>

                                        <div className="skills-box">
                                            <div className="head">
                                                <div className="fs-16 fw-600 text-white">Frameworks</div>
                                            </div>
                                            <div className="body">
                                                {data.skills[4].frameworks}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 mb-3">
                                        <div className="skills-box mb-3">
                                            <div className="head">
                                                <div className="fs-16 fw-600 text-white">Tools</div>
                                            </div>
                                            <div className="body">
                                                {data.skills[3].tools}
                                            </div>
                                        </div>

                                        <div className="skills-box">
                                            <div className="head">
                                                <div className="fs-16 fw-600 text-white">Other</div>
                                            </div>
                                            <div className="body">
                                                {data.skills[2].other}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="profile-section position-relative" id='about'>
                    <div className="container">
                        <div className="d-flex align-items-center gap-3">
                            <div className="fs-32 fw-500 text-white"><span className="text-primary">#</span>about us</div>
                            <div className="heading-line"></div>
                        </div>
                        <div className="row align-items-center mt-5">
                            <div className="col-lg-6">
                                <div className='fs-16 fw-400 text-grey mb-4'>
                                    Hello, i’m {data.aboutUs[0].name}!
                                </div>
                                {data.aboutUs[1].aboutYourSelf.split('/').map((item, i) => {
                                    return (
                                        <div className='fs-16 fw-400 text-grey mb-4' key={i}>
                                            {item}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="profile-img">
                                    <img src="/assets/images/person.png" className='w-100' alt="" />
                                    <div className="dots-1">
                                        <img src="/assets/images/dots-1.svg" alt="" />
                                    </div>
                                    <div className="dots-2">
                                        <img src="/assets/images/dots-1.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="contact-section position-relative " id='contact'>
                    <div className="container">
                        <div className="d-flex align-items-center gap-3">
                            <div className="fs-32 fw-500 text-white"><span className="text-primary">#</span>contacts</div>
                            <div className="heading-line"></div>
                        </div>
                        <div className="row justify-content-between mt-5">
                            <div className="col-lg-6 mb-md-0 mb-4">
                                <div className="fs-16 fw-500 text-grey">
                                    {data.contactUs[0].heading}
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="message-box">
                                    <div className="fs-16 fw-600 text-white mb-3">
                                        Message me here
                                    </div>
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <div className='fs-20 text-grey'>
                                            <span className="iconify" data-icon="ic:baseline-local-phone"></span>
                                        </div>
                                        <a href={"tel:" + data.contactUs[1].messageMe[2].phone} className="fs-16 fw-400 text-grey">
                                            {data.contactUs[1].messageMe[2].phone}
                                        </a>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className='fs-20 text-grey'>
                                            <span className="iconify" data-icon="ic:outline-mail-outline"></span>
                                        </div>
                                        <a href={'mailto:' + data.contactUs[1].messageMe[1].mail} className="fs-16 fw-400 text-grey">
                                            {data.contactUs[1].messageMe[1].mail}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-6">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6 mb-4">
                                            <div className="input-box">
                                                <input type="text" placeholder='Name' />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="input-box">
                                                <input type="text" placeholder='Email' />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-4">
                                            <div className="input-box">
                                                <input type="text" placeholder='Title' />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 mb-3">
                                            <div className="input-box">
                                                <textarea placeholder='Message'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0)" className='btnPrimary h-37'>Send</a>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="dots-3">
                        <img src="/assets/images/dots-3.svg" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
