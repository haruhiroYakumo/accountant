import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';

import store from './store/store';
import NavigationStacks from './navigation/NavigationStacks';

/**
 * Root component
 */
const App: React.FC = () => {
  return (
    <PaperProvider>
      <ReduxProvider store={ store }>
        <NavigationStacks/>
      </ReduxProvider>
    </PaperProvider>
  );
};

export default App;
