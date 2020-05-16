import React from "react";
import { Navbar, Nav} from "react-bootstrap";

function NavBar() {
	return (
		<div>
			<Navbar bg='light' expand='lg' variant='light'>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#projects'>Projects</Nav.Link>
						<Nav.Link href='#contact'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default NavBar;
