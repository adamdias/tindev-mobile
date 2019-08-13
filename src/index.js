import React from 'react';
import Routes from './routes';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket connection option'
]);

function App() {
  return (
    <Routes />
  );
};

export default App;
