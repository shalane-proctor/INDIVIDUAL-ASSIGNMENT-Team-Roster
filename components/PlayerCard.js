import React from 'react';
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
      <Card.Img
        variant="left"
        className="card-img-left example-card-img-responsive"
        src={playerObj.imageUrl}
        style={{
          // height: '10vh',
          padding: '30px',
          maxWidth: '20%',
          margin: '0 auto',
        }}
      />
      <Card.Body>
        <Card.Title>
          {playerObj.name} - {playerObj.position}
        </Card.Title>
        <Card.Text>Name: {playerObj.name}</Card.Text>
        <Card.Text>Team: {playerObj.team}</Card.Text>
        <Card.Text>Position: {playerObj.position}</Card.Text>
        <Button variant="primary">Reassign</Button>
        <Button variant="primary" onClick={deleteThisPlayer}>
          Relieve of duty
        </Button>
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
