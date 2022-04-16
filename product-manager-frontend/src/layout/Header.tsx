import React from 'react';
import { Navbar, Container } from 'react-bootstrap';


const Header: React.FC = () => {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Microserve Admin Front</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
