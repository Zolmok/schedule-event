import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';

import React from 'react';
import rootReducer from './reducers/index';

import './normalize.css';
import './App.css';

import {ScheduleWizard} from './components/schedule-wizard/schedule-wizard';

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, composeEnhancers());

function App() {
  return (
    <Provider store={store}>
      <ScheduleWizard />
    </Provider>
  );
}

export default App;
