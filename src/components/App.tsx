import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container bg-background">
      <header className="app-header bg-gray-800 p-4">
        <h1 className="app-title text-foreground">Welcome to My Web App</h1>
      </header>
      <main className="app-main">
        <p className="app-description text-muted-foreground">This is a simple web application.</p>
      </main>
      <footer className="app-footer">
        <p className="text-muted-foreground">Â© 2023 My Web App</p>
      </footer>
    </div>
  );
};

export default App;