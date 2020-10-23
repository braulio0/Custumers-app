import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader.jsx';

const AppFrame = ({header, body}) => {
  return (
    <div>
      <div className="app-frame">
          <AppHeader title={header} />
        <div>{body}</div>
        <div>Ejemplo de app simple</div>
      </div>
    </div>
  );
};

AppFrame.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
};

export default AppFrame;
