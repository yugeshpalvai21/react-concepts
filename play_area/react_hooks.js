import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const Header = ({title, description}) => {
  const [counter, setCounter] = useState(0);
  const addOne = () => {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>{ title }</h1>
      <p>{ description }</p>
      <p>Counter Is - { counter }</p>
      <button onClick={addOne}>Add One</button>
    </div>
  )
}

Header.defaultProps = {
  title: 'default title',
  description: 'default description'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

const domElement = document.getElementById('app');
ReactDOM.render(<Header />, domElement);