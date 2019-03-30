import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import userLocation from './userLocation';

const App = () => {
  const [lat, errorMessage] = userLocation();

  const renderContent = () => {
    if (errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>;
    }
    if (!errorMessage && lat) {
      return <SeasonDisplay lat={lat} />;
    }
    return <Spinner message="Accept location request" />;
  };
  return <div className="border red"> {renderContent()}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
