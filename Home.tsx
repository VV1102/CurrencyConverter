import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Currency Converter</h1>
      <p>This is a simple currency converter app built with React and TypeScript.</p>
      <p>Choose an option from below:</p>
      <ul>
        <li><Link to="/converter">Currency Converter</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
};

export default Home;