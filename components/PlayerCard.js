import React from 'react';
// import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

export default function PlayerCard() {
  const deleteThisPlayer = () => {
    (window.confirm('Relieve of duty?'))(
      console.warn('Player relieved of duty'),
    );
  };

  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Player</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Img variant="left" className="card-img-left example-card-img-responsive" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        <Button variant="primary" onClick={deleteThisPlayer}>Reassign</Button>
        <Button variant="primary">Relieve</Button>
      </Card.Body>
    </Card>
  );
}
