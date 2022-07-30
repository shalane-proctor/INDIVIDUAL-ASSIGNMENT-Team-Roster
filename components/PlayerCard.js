import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { deletePlayer } from '../api/playerData';

export default function PlayerCard({ playerObj, onUpdate }) {
  const deleteThisPlayer = () => {
    if (window.confirm(`Relieve ${playerObj.position} ${playerObj.name} of duty?`)) {
      deletePlayer(playerObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card>
      <Card.Img variant="top" className="card-img-top example-card-img-responsive" src={playerObj.imageUrl} />
      <Card.Body>
        <Card.Header className="topnav-right">
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Crew Member</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <div className="player-card-text">
          <Card.Title>
            {playerObj.name} - {playerObj.position}
          </Card.Title>
          <Card.Text>Name: {playerObj.name}</Card.Text>
          <Card.Text>Crew: {playerObj.team}</Card.Text>
          <Card.Text>Position: {playerObj.position}</Card.Text>
          <div className="project-buttons">
            <Link href={`/team/edit/${playerObj.firebaseKey}`} passHref>
              <Button variant="primary">Reassign</Button>
            </Link>
            <Button variant="primary" onClick={deleteThisPlayer}>
              Relieve of duty
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

PlayerCard.propTypes = {
  playerObj: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    team: PropTypes.string,
    imageUrl: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
