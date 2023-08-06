import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import data from '../../utils/main.json'


const Header = () => {
    const handleClickScroll = (id) => {
        const element = document.getElementById(`${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <Navbar expand="lg" className='py-md-4' key={'lg'} collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} to="#home">
                        <img src="/assets/images/logo.svg" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} aria-labelledby={`offcanvasNavbarLabel-expand-lg`} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                <img src="assets/images/logo.svg" height={"25px"} alt="" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="ms-auto gap-3">
                                <Nav.Link as={Link} to="#home" eventKey="1" onClick={() => handleClickScroll("home")}><span className='text-primary'>#</span>Home</Nav.Link>
                                <Nav.Link as={Link} to="#project" eventKey="2" onClick={() => handleClickScroll("project")}><span className='text-primary'>#</span>Projects</Nav.Link>
                                <Nav.Link as={Link} to="#skills" eventKey="3" onClick={() => handleClickScroll("skills")}><span className='text-primary'>#</span>Skills</Nav.Link>
                                <Nav.Link as={Link} to="#about" eventKey="4" onClick={() => handleClickScroll("about")}><span className='text-primary'>#</span>About</Nav.Link>
                                <Nav.Link as={Link} to="#contact" eventKey="5" onClick={() => handleClickScroll("contact")}><span className='text-primary'>#</span>Contacts</Nav.Link>
                            </Nav>
                            <div className=" sm-icons d-flex d-md-none justify-content-center align-items-center gap-4 mt-5 pt-4">
                                <a href="javascript:void(0)" className='fs-32 text-grey'><span class="iconify" data-icon="mdi:github"></span></a>
                                <a href="javascript:void(0)" className='fs-32 text-grey'><span class="iconify" data-icon="mdi:linkedin"></span></a>
                                <a href="javascript:void(0)" className='fs-32 text-grey'><span class="iconify" data-icon="dashicons:whatsapp"></span></a>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <div className="social-icons gap-3 d-md-flex d-none">
                <div className="vertical-line"></div>
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
        </>
    )
}

export default Header