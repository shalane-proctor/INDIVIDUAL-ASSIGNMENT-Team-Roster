import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSinglePlayer } from '../../../api/playerData';
import PlayerForm from '../../../components/forms/PlayerForm';

export default function EditAPlayer() {
  const [editPlayer, setEditPlayer] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    getSinglePlayer(firebaseKey).then(setEditPlayer);
  }, [firebaseKey]);
  return (
    <><title>Space Race - Reassign</title><meta name="description" content="Meta description for the team page" /><PlayerForm obj={editPlayer} /></>
  );
}
