import React from 'react';
import data from '../../utils/main.json';
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-padding">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 mb-md-0 mb-4">
                            <div className="d-flex align-items-center gap-4 mb-3">
                                <div className="logo">
                                    <img src="/assets/images/logo.svg" height={'35px'} alt="" />
                                </div>
                                <div className="fs-16 fw-400 text-grey">{data.contactUs[1].messageMe[1].mail}</div>
                            </div>
                            <div className="fs-16 fw-400 text-white">
                                {data.footer.content}
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="text-md-end fs-24 fw-500 text-white mb-3">
                                Media
                            </div>
                            <div className="d-flex align-items-center justify-content-md-end gap-3">
                                <a href={data.social[0].GitHub} target='_blank' rel='noopener noreferrer' className='fs-26 text-grey'>
                                    <span className="iconify" data-icon="mdi:github"></span>
                                </a>
                                <a href={data.social[1].LinkedIn} target='_blank' rel='noopener noreferrer' className='fs-26 text-grey'>
                                    <span className="iconify" data-icon="mdi:linkedin"></span>
                                </a>
                                <a href={data.social[2].Behance} target='_blank' rel='noopener noreferrer' className='fs-26 text-grey'>
                                    <span className="iconify" data-icon="ant-design:behance-outlined"></span>
                                </a>
                                <a href={'tel:' + data.social[3]['What\'sapp']} className='fs-26 text-grey'>
                                    <span className="iconify" data-icon="dashicons:whatsapp"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center fs-16 fw-400 text-grey pt-5">
                        {data.footer.copyright}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer