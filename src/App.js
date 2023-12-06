import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { Grid, View, useTheme } from '@aws-amplify/ui-react';

Amplify.configure(config);

function App() {
  const { tokens } = useTheme();
  return (
    <Grid
      templateColumns="1fr 1fr"
      templateRows="10rem 10rem"
      gap={tokens.space.small}
    >
      <View backgroundColor={tokens.colors.blue[10]}></View>
      <View backgroundColor={tokens.colors.blue[20]}></View>
      <View backgroundColor={tokens.colors.blue[40]}></View>
      <View backgroundColor={tokens.colors.blue[60]}></View>
    </Grid>
  );
}

export default App;
