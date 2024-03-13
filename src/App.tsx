import React from 'react';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center',alignItems: 'center', height: '100vh' }}>
      <h1 style={{ color: 'lightseagreen' }}>
        { window.location.hostname }
      </h1>
    </div>
  );
}

export default App;
