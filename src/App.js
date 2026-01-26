import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import React from "react";
import rootReducer from "./reducers/index";

import "./normalize.css";
import "./App.css";

import ErrorBoundary from "./components/ErrorBoundary";
import { ScheduleWizard } from "./components/schedule-wizard/schedule-wizard";

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <ScheduleWizard />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
