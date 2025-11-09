import React from 'react';
import './App.css';

// GitHubAvatar Component - displays GitHub avatar
function GitHubAvatar() {
  return (
    <div className="avatar-container">
      <img 
        src="https://github.com/Punnawich121-6.png" 
        alt="GitHub Avatar" 
        className="avatar-image"
      />
    </div>
  );
}

// GitHubRepoURL Component - displays GitHub repository link
function GitHubRepoURL() {
  return (
    <div className="repo-link-container">
      <a 
        href="https://github.com/Punnawich121-6" 
        target="_blank" 
        rel="noreferrer"
        className="repo-link"
      >
        My GitHub repository
      </a>
    </div>
  );
}

// GitHubInfo Component - main component that displays h1 and other components
function GitHubInfo() {
  return (
    <div className="github-info">
      <h1>My GitHub Information</h1>
      <GitHubAvatar />
      <GitHubRepoURL />
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div className="App">
      <GitHubInfo />
    </div>
  );
}

export default App;