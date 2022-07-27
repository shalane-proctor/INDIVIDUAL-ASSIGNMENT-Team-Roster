import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createPlayer, updatePlayer } from '../../api/playerData';

const initialState = {
  imageUrl: 'https://www.maxpixel.net/static/photo/1x/Man-Sci-fi-Astronaut-Helmet-Portrait-Interference-6774653.jpg',
  name: '',
  position: '',
  team: '',
  about: '',
};

export default function PlayerForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  // const [team, setTeam] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updatePlayer(formInput)
        .then(() => router.push('/team'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createPlayer(payload).then(() => {
        router.push('/team');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>{obj.firebaseKey ? 'Reassign' : 'Add'} Player</h2>
      <FloatingLabel controlId="floatingTextarea" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Player Name" name="name" value={formInput.name} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Position" className="mb-3">
        <Form.Control type="text" placeholder="Player Position" name="position" value={formInput.position} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Team" className="mb-3">
        <Form.Control type="text" placeholder="team" name="team" value={formInput.team} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="About">
        <Form.Control type="text" placeholder="About" style={{ height: '100px' }} name="about" value={formInput.about} onChange={handleChange} />
      </FloatingLabel>
      <Button type="submit">{obj.firebaseKey ? 'Reassign' : 'Add'} Player</Button>
    </Form>
  );
}
PlayerForm.defaultProps = {
  obj: initialState,
};
PlayerForm.propTypes = {
  obj: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    team: PropTypes.string,
    about: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};
