import React from 'react'

const ProjectCard = ({ item }) => {
  return (
    <>
      <div className="project-card">
        <div className="project-img">
          <img src="/assets/images/project-1.jpg" alt="" />
        </div>
        <div className="fs-16 fw-400 text-grey py-2 px-2">{item.languages}</div>
        <div className="project-body">
          <div className="fs-24 fw-500 text-white mb-3">{item.heading}</div>
          <div className="fs-16 fw-400 text-grey mb-5">
            {item.subHeading}
          </div>
          <div className="button-box mt-5 d-flex align-items-center gap-3">
            <a href="javascript:void(0)" className='btnPrimary h-37'>Live {'<'}~{'>'}</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard