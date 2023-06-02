import React from 'react';
import WelcomePage from './WelcomePage.tsx';

const Home: React.FC = () => (
  <div style={{ textAlign: 'center' }}>
    <h1> Please log in or create an account.</h1>
    <br />
    <div>
      <WelcomePage />
    </div>
  </div>
);

export default Home;
