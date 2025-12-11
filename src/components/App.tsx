import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Welcome to My Web App</h1>
      </header>
      <main className="app-main">
        <p className="app-description">This is a simple web application.</p>
      </main>
      <footer className="app-footer">
        <p>© 2023 My Web App</p>
      </footer>
    </div>
  );
};

export default App;
