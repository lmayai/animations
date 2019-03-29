import React from 'react';
import ReactDOM from 'react-dom';
import Invie from './Invie';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Invie />, div);
  ReactDOM.unmountComponentAtNode(div);
});
