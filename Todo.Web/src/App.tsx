import { bindActionCreators } from '@reduxjs/toolkit';
import React from 'react';
import { connect } from 'react-redux';
import ToDoList from "./components/TodoList";
import Header from "./components/Header";
import { actionLoadData } from './state/actions';
import store from './state/store';
import { RootState, TodoModel, ToDoStatus } from './state/types';

const App = () => {
  React.useEffect(() => {
    store.dispatch(actionLoadData());
  }, []);

  return (
    <>
      <Header />
      <ToDoList />
    </>
  );
};

export default App;