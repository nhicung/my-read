import React from 'react';
import './App.css';
import ReadList from './pages/ReadList';

function Page() {
  return (
    <div>

      <div className="App">
          <ReadList />
      </div>
      <div>
 
      </div>
      
    </div>
  );
}

export default function App() {
  return (
    <Page />
  );
}