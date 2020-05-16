import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Intro.css";
import Graph from '../components/Graph';
function Intro() {
	return (
		<div className='intro-container'>
			<Card style={{ width: '500px'}}>
				<Card.Img variant="top" style = {{width : '100%', height : '70%'}} src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
				<Card.Body>
						<Graph />
				</Card.Body>
				</Card>
		</div>
	);
}

export default Intro;
