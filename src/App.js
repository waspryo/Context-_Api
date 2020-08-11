import React from 'react';
import './App.css';
import MoviewList from './MoviewList';
import Nav from './Nav';
import AddMovie from './AddMovie';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    <MovieProvider>
      {/* Movieの情報をラップすることで中のコンポーネント全てにわたる */}
      <div className="App" >
        <Nav />
        <AddMovie />
        <MoviewList />
      </div>
    </MovieProvider>
  );
}

export default App;
