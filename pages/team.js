import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import { getPlayers } from '../api/playerData';
import PlayerCard from '../components/PlayerCard';
import { useAuth } from '../utils/context/authContext';

export default function TeamPage() {
  const [players, setPlayers] = useState([]);
  const { user } = useAuth();
  const getAllPlayers = () => {
    getPlayers(user.uid).then(setPlayers);
  };
  useEffect(() => {
    getAllPlayers();
  }, []);
  return (
    <>
      <div>
        <Head>
          <title>Space Race - Team Roster</title>
          <meta name="description" content="Meta description for the team page" />
        </Head>
      </div>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          // height: '10vh',
          padding: '30px',
          maxWidth: '3000px',
          margin: '0 auto',
        }}
      >
        <div
          className="title-and-text"
          style={{
            background: 'rgb(128, 146, 163, 0.7)',
          }}
        >
          <h3>Please enjoy creating fantasy space race crew for the Galactic Troopers!</h3>
          <p>The Galactic Troopers are a strong crew led by a fearless captain! They not only participate in the Space Race, but during their off seasons they bravely explore through the depths of the universe.</p>
        </div>
        <div className="project-buttons">
          <Link href="/team/new" passHref>
            <Button variant="info" type="button" size="lg" className="copy-btn">
              Recruit
            </Button>
          </Link>
        </div>
        <div className="flex-wrap">
          {players.map((player) => (
            <PlayerCard key={player.firebaseKey} playerObj={player} onUpdate={getAllPlayers} />
          ))}
        </div>
      </div>
    </>
  );
}
