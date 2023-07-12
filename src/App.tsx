import React from 'react';
import Home from './pages/Home';
import bg from "./assets/images/waves.svg"

function App() {
  return (
    <div className='app text-white' style={{
      backgroundRepeat: 'no-repeat',
      background: `url(${bg})`,
      backgroundPosition: 'center center',
      backgroundSize: "cover"
    }}>
      <Home />

    </div>
  );
}

export default App;
