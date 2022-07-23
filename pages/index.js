import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  console.warn(user.uid);
  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center "
        style={{
          // height: '10vh',
          padding: '30px',
          maxWidth: '3000px',
          margin: '0 auto',
        }}
      >
        <h1>Welcome to the Space Race Team Rosters! </h1>
        <h6>The Space Race is a collection of different styles of starship and rover racing! You can expect to experience supreme entertainment inclusive to all interstellar races and beings. Here you can follow your favorite teams and add new players.</h6>
      </div>
      <div>
        <Button variant="info" type="button" size="lg" width="100px" className="copy-btn text-center align-content-center">
          View the Team!
        </Button>
      </div>
    </>
  );
}

export default Home;
