import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

export default function TeamPage() {
  const { user } = useAuth();
  console.warn(user.uid);
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        // height: '10vh',
        padding: '30px',
        maxWidth: '3000px',
        margin: '0 auto',
      }}
    >
      <h3>Please enjoy creating fantasy space race players for the Galactic Troopers!</h3>
      <p>The Galactic Troopers are a strong team led by a fearless captain! They not only participate in the Space Race, but during their off seasons they bravely explore through the depths of the universe.</p>
      <Button variant="info" type="button" size="lg" className="copy-btn">
        Add Player
      </Button>
    </div>
  );
}
