import 'react-native-gesture-handler';
import React from 'react';

import AppContainer from './src/navigations/AppContainer';
import UserProvider from './src/commons/contexts/user';

const App = () => {
  return (
    <UserProvider>
      <AppContainer />
    </UserProvider>
  );
};

export default App;
