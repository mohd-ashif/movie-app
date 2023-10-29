import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const HeaderComponents = () => {
    const navData = [
        { name: 'Home', Link: '/' },
        { name: 'Movies', Link: '/movies' },
        { name: 'Tv Series', Link: '/series' },
        { name: 'Search', Link: '/search' },
    ];

    return (
        <div>
            <header className='header'>
                <Navbar bg="dark" expand="lg">
                    <Container>
                        <Navbar.Brand>Movieflix</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
                                {navData.map((item) => (
                                    <Nav key={item.name}>
                                        <Link to={item.Link}>
                                            {item.name}
                                        </Link>
                                    </Nav>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    );
}

export default HeaderComponents;
