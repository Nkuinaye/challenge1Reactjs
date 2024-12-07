import React, { useEffect, useState } from 'react';

const Trafficlights = () => {
  const [light, setLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prevLight) => {
        if (prevLight === 'red') return 'yellow';
        if (prevLight === 'yellow') return 'green';
        if (prevLight === 'green') return 'red';
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    backgroundColor: 'black',
    borderRadius: '10px',
    width: '50px',
    padding: '10px',
  };

  const lightStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    margin: '10px 0',
  };

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
    textAlign: 'center', 
  };

  return (
    <div style={wrapperStyle}>
      <div className="d-flex flex-column align-items">
        <h1 className="">Traffic Lights</h1>
        <div style={containerStyle}>
          <div
            style={{
              ...lightStyle,
              backgroundColor: light === 'red' ? 'red' : 'gray',
            }}
          ></div>
          <div
            style={{
              ...lightStyle,
              backgroundColor: light === 'yellow' ? 'yellow' : 'gray',
            }}
          ></div>
          <div
            style={{
              ...lightStyle,
              backgroundColor: light === 'green' ? 'green' : 'gray',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Trafficlights;
