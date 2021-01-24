import React from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { AppRouter } from "./components/router/AppRouter";


export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
